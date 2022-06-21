import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import BadContactPacket from "./BadContactPacket";
import {ContactRequestResponseType} from "./ContactRequestPacket";

export default class BadContactPacketAdapter extends PacketAdapter<BadContactPacket> {
    constructor() {
        super(BadContactPacket.PACKET_NAME);
    }

    onDeserialize(data: string): BadContactPacket {
        const split = data.split(" ")
        const username = split[0]
        const reason = split[1] as ContactRequestResponseType

        return new BadContactPacket(username, reason);
    }

    // @ts-ignore
    onReceive(context: PacketContext<BadContactPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}