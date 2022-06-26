import { MessagePacket, MessagePacketAdapter } from "@swiftmessage/common";
import {PacketContext} from "packet-system";
import user from "../../user";
import message from "../../message";

export default class MessagePacketAdapterWrapper extends MessagePacketAdapter {
    onReceive(context: PacketContext<MessagePacket>): void {
        const packet = context.getPacket()
        const content = packet.getMessage()
        const recipients = packet.getRecipients()

        for (const recipient of recipients) {
            message.addSelfMessage(recipient, content)
            console.log(`messages sent to ${recipient} in lifetime: ${JSON.stringify(user.getPersonalHandler().getUser().getMessagesTo(recipient))}`)
        }
        console.log(`list of contacts: ${JSON.stringify(user.getPersonalHandler().getUser().getAllContacts())}`)
    }
}