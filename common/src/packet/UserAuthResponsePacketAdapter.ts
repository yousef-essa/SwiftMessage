import {PacketAdapter, PacketContext, PacketReceiptStatus} from "packet-system";
import UserAuthResponsePacket, {UserAuthResponseType} from "./UserAuthResponsePacket";

export default class UserAuthResponsePacketAdapter extends PacketAdapter<UserAuthResponsePacket> {
    constructor() {
        super(UserAuthResponsePacket.PACKET_NAME);
    }

    onDeserialize(serializedData: string): UserAuthResponsePacket {
        const args = serializedData.split(";")
        const username = args[0]
        const reason = args[1] as UserAuthResponseType
        return new UserAuthResponsePacket(username, reason);
    }

    // @ts-ignore
    onReceive(context: PacketContext<UserAuthResponsePacket>): void {
        // up to the receiver
    }

    receiptStatus(): PacketReceiptStatus {
        return PacketReceiptStatus.CLIENT;
    }
}