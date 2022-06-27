import {PacketContext} from "packet-system";
import UserHandler from "../lib/UserHandler";
import {
    ContactRequestResponseType,
    ContactResponsePacket,
    MessagePacketAdapter, MessageReceivePacket
} from "@swiftmessage/common";
import {MessagePacket} from "@swiftmessage/common";

export default class MessagePacketAdapterWrapper extends MessagePacketAdapter {
    private readonly userHandler: UserHandler

    constructor(userHandler: UserHandler) {
        super()
        this.userHandler = userHandler;
    }

    onReceive(context: PacketContext<MessagePacket>): void {
        const packet = context.getPacket()
        const message = packet.getMessage()
        const recipients = packet.getRecipients()

        const sender = this.userHandler.getUser(context.getFrom())
        if (sender == null) {
            console.log(`A non-authorized user attempted to send ${message} message to ${recipients} recipients.`)
            return
        }

        for (const recipient of recipients) {
            const user = this.userHandler.getUserByUsername(recipient)
            if (user == null) {
                continue
            }

            // if the sender has sent any messages
            // send a contact add packet to sender
            if ((user.getMessagesTo(sender.getUsername())?.length ?? 0) == 0) {
                context.getPacketHandler().send(new ContactResponsePacket(sender.getUsername(), ContactRequestResponseType.ACCEPTED), user.getConnection())
            }

            // sender sent message to user, with the following message
            sender.addMessage(user, message)
            context.getPacketHandler().send(new MessageReceivePacket(sender.getUsername(), message), user.getConnection())
        }

        context.getPacketHandler().send(new MessagePacket(message, recipients), sender.getConnection())
    }
}