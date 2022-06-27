import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import ContactRemovalPacket from "./ContactRemovalPacket";

export default class ContactRemovalPacketAdapter extends PacketAdapter<ContactRemovalPacket> {
    constructor() {
        super(ContactRemovalPacket.PACKET_NAME);
    }

    onDeserialize(serializedData: string): ContactRemovalPacket {
        return new ContactRemovalPacket(serializedData);
    }

    // @ts-ignore
    onReceive(context: PacketContext<ContactRemovalPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}