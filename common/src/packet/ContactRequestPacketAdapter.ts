import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import ContactRequestPacket from "./ContactRequestPacket";

export default class ContactRequestPacketAdapter extends PacketAdapter<ContactRequestPacket> {
    constructor() {
        super(ContactRequestPacket.PACKET_NAME);
    }

    onDeserialize(username: string): ContactRequestPacket {
        return new ContactRequestPacket(username);
    }

    // @ts-ignore
    onReceive(context: PacketContext<ContactRequestPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}