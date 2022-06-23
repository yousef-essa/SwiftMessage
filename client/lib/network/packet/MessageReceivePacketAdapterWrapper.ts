import { MessageReceivePacket, MessageReceivePacketAdapter } from "@swiftmessage/common";
import { PacketContext } from "packet-system";
import user from "../../user";

export default class MessageReceivePacketAdapterWrapper extends MessageReceivePacketAdapter {
    onReceive(context: PacketContext<MessageReceivePacket>): void {
        const packet = context.getPacket()
        const sender = packet.getSender()
        const message = packet.getMessage()

        user.addMessage(sender, message)
        const recipient = user.getPersonalHandler().getUser();

        console.log(`messages sent by ${sender} in lifetime: ${JSON.stringify(user.getUser(sender)?.getMessagesBy(recipient.getUsername()))}`)
        console.log(`list of contacts: ${JSON.stringify(recipient.getAllContacts())}`)
    }
}