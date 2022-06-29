import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import ContactAddPacket from "./ContactAddPacket";

export default class ContactAddPacketAdapter extends PacketAdapter<ContactAddPacket> {
    constructor() {
        super(ContactAddPacket.PACKET_NAME);
    }

    onDeserialize(username: string): ContactAddPacket {
        return new ContactAddPacket(username)
    }

    // @ts-ignore
    onReceive(context: PacketContext<ContactAddPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}