import {PacketAdapter, PacketContext} from "packet-system";
import UserHandler from "../lib/UserHandler";
import {User} from "@swiftmessage/common";
import {UserAuthPacket} from "@swiftmessage/common";

export default class UserAuthPacketAdapter extends PacketAdapter<UserAuthPacket> {
    private readonly userHandler: UserHandler

    constructor(userHandler: UserHandler) {
        super(UserAuthPacket.PACKET_NAME);
        this.userHandler = userHandler;
    }

    onDeserialize(username: string): UserAuthPacket {
        return new UserAuthPacket(new User(username));
    }

    onReceive(context: PacketContext<UserAuthPacket>): void {
        this.userHandler.addUser(context.getPacket().getUser(), context.getFrom())
    }
}