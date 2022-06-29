import {PacketContext} from "packet-system";
import {
    ContactRequestPacket,
    ContactRequestPacketAdapter,
    ContactResponsePacket
} from "@swiftmessage/common";
import ContactHandler from "../lib/ContactHandler";
import UserHandler from "../lib/UserHandler";

export default class ContactRequestPacketAdapterWrapper extends ContactRequestPacketAdapter {
    private readonly contactHandler: ContactHandler
    private readonly userHandler: UserHandler

    constructor(contactHandler: ContactHandler, userHandler: UserHandler) {
        super();
        this.contactHandler = contactHandler;
        this.userHandler = userHandler;
    }

    onReceive(context: PacketContext<ContactRequestPacket>): void {
        const senderConnection = context.getFrom();
        let targetUsername = context.getPacket().getUsername();
        const validateRequest = this.contactHandler.validateRequest(senderConnection, targetUsername)

        // fixes an issue with the username
        // capitalization not matching
        const targetUser = this.userHandler.getUserByUsername(targetUsername)
        if (targetUser != null) {
            targetUsername = targetUser.getUsername()
        }

        console.log(`sending ${targetUsername} for ${validateRequest} reason`)

        // send a response from that request
        context.getPacketHandler().send(new ContactResponsePacket(targetUsername, validateRequest), senderConnection)
    }
}