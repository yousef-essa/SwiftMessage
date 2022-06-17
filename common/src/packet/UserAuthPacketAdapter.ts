import {PacketAdapter, PacketContext} from "packet-system";
import UserAuthPacket from "./UserAuthPacket";
import User from "../user/User";

export default class UserAuthPacketAdapter extends PacketAdapter<UserAuthPacket> {
    constructor() {
        super(UserAuthPacket.PACKET_NAME);
    }

    onDeserialize(username: string): UserAuthPacket {
        return new UserAuthPacket(new User(username));
    }

    // @ts-ignore
    onReceive(context: PacketContext<UserAuthPacket>): void {
        // up to the receiver
    }
}