import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import {ContactRequestResponseType} from "./ContactRequestPacket";
import ContactResponsePacket from "./ContactResponsePacket";

export default class ContactResponsePacketAdapter extends PacketAdapter<ContactResponsePacket> {
    constructor() {
        super(ContactResponsePacket.PACKET_NAME);
    }

    onDeserialize(data: string): ContactResponsePacket {
        const split = data.split(" ")
        const username = split[0]
        const reason = split[1] as ContactRequestResponseType

        return new ContactResponsePacket(username, reason);
    }

    // @ts-ignore
    onReceive(context: PacketContext<ContactResponsePacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.SERVER;
    }
}