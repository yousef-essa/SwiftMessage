import {PacketContext, PacketListener} from "packet-system";
import UserAuthPacket from "./UserAuthPacket";

export default class UserAuthPacketListener extends PacketListener<UserAuthPacket> {
    onDeserialize(message: string): UserAuthPacket {
        return new UserAuthPacket(message);
    }

    onReceive(context: PacketContext<UserAuthPacket>): void {
        // up to the server to overwrite this
    }

    onSerialize(packet: UserAuthPacket): string {
        return packet.getUsername()
    }
}