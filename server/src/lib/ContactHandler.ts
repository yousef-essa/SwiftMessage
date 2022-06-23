import UserHandler from "./UserHandler";
import {ContactRequestResponseType, User} from "@swiftmessage/common";
import {Connection} from "packet-system";

export default class ContactHandler {
    private readonly userHandler: UserHandler

    constructor(userHandler: UserHandler) {
        this.userHandler = userHandler;
    }

    validateRequest(senderConnection: Connection, targetUsername: string) {
        const senderUser = this.userHandler.getUser(senderConnection)

        console.log(`Sender id: ${senderConnection.id()}`)
        console.log(`Sender user: ${JSON.stringify(senderUser)}`)

        // if the sender does not have a user instance registered
        // that would mostly indicate that the sender's clientside
        // is broken from their end
        if (senderUser == undefined) {
            return ContactRequestResponseType.INVALID_SENDER
        }

        const targetUser = this.userHandler.getUserByUsername(targetUsername)

        // if the target user does not have a user instance registered
        // that would mostly indicate the username the sender provided
        // is nonexistent in our end
        if (targetUser == null) {
            return ContactRequestResponseType.INVALID_TARGET
        }

        // add contact in our side since we'll be sending
        // out the accepted response
        senderUser.addContact(targetUser)

        // everything checks out!
        return ContactRequestResponseType.ACCEPTED
    }
}