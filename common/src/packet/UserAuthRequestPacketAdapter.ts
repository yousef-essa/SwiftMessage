import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import UserAuthRequestPacket from "./UserAuthRequestPacket";

export default class UserAuthRequestPacketAdapter extends PacketAdapter<UserAuthRequestPacket> {
    constructor() {
        super(UserAuthRequestPacket.PACKET_NAME);
    }

    onDeserialize(username: string): UserAuthRequestPacket {
        return new UserAuthRequestPacket(username);
    }

    // @ts-ignore
    onReceive(context: PacketContext<UserAuthRequestPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.SERVER;
    }
}