import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import AddContactPacket from "./AddContactPacket";

export default class AddContactPacketAdapter extends PacketAdapter<AddContactPacket> {
    constructor() {
        super(AddContactPacket.PACKET_NAME);
    }

    onDeserialize(username: string): AddContactPacket {
        return new AddContactPacket(username);
    }

    // @ts-ignore
    onReceive(context: PacketContext<AddContactPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}