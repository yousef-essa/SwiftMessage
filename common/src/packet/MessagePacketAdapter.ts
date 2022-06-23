import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import Message from "../user/Message";
import MessagePacket from "./MessagePacket";

export default class MessagePacketAdapter extends PacketAdapter<MessagePacket> {
    constructor() {
        super(MessagePacket.PACKET_NAME);
    }

    onDeserialize(serializedData: string): MessagePacket {
        const splitArg = serializedData.split(";")
        const message = Message.deserialize(splitArg[0])

        const recipients: string[] = splitArg[1].split(" ")
        return new MessagePacket(message, recipients);
    }

    // @ts-ignore
    onReceive(context: PacketContext<MessagePacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.BOTH;
    }
}