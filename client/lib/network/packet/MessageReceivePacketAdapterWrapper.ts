import { MessageReceivePacket, MessageReceivePacketAdapter } from "@swiftmessage/common";
import { PacketContext } from "packet-system";
import user from "../../user";
import message from "../../message";

export default class MessageReceivePacketAdapterWrapper extends MessageReceivePacketAdapter {
    onReceive(context: PacketContext<MessageReceivePacket>): void {
        const packet = context.getPacket()
        const sender = packet.getSender()
        const content = packet.getMessage()

        message.addMessage(sender, content)
        const recipient = user.getPersonalHandler().getUser();

        console.log(`messages sent by ${sender} in lifetime: ${JSON.stringify(user.getUser(sender)?.getMessagesTo(recipient.getUsername()))}`)
        console.log(`list of contacts: ${JSON.stringify(recipient.getAllContacts())}`)
    }
}