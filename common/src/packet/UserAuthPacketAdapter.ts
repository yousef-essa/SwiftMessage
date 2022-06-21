import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import UserAuthPacket from "./UserAuthPacket";

export default class UserAuthPacketAdapter extends PacketAdapter<UserAuthPacket> {
    constructor() {
        super(UserAuthPacket.PACKET_NAME);
    }

    onDeserialize(username: string): UserAuthPacket {
        return new UserAuthPacket(username);
    }

    // @ts-ignore
    onReceive(context: PacketContext<UserAuthPacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.SERVER;
    }
}