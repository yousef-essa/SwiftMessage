import { MessagePacket, MessagePacketAdapter } from "@swiftmessage/common";
import {PacketContext} from "packet-system";
import user from "../../user";

export default class MessagePacketAdapterWrapper extends MessagePacketAdapter {
    onReceive(context: PacketContext<MessagePacket>): void {
        const packet = context.getPacket()
        const message = packet.getMessage()
        const recipients = packet.getRecipients()

        for (const recipient of recipients) {
            user.addSelfMessage(recipient, message)
            console.log(`messages sent to ${recipient} in lifetime: ${JSON.stringify(user.getPersonalHandler().getUser().getMessagesBy(recipient))}`)
        }
        console.log(`list of contacts: ${JSON.stringify(user.getPersonalHandler().getUser().getAllContacts())}`)
    }
}