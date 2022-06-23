import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import MessageReceivePacket from "./MessageReceivePacket";
import Message from "../user/Message";

export default class MessageReceivePacketAdapter extends PacketAdapter<MessageReceivePacket> {
    constructor() {
        super(MessageReceivePacket.PACKET_NAME);
    }

    onDeserialize(serializedData: string): MessageReceivePacket {
        const args = serializedData.split(";")
        const sender = args[0]
        const message = Message.deserialize(args.slice(1).join(""))

        return new MessageReceivePacket(sender, message)
    }

    // @ts-ignore
    onReceive(context: PacketContext<MessageReceivePacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}