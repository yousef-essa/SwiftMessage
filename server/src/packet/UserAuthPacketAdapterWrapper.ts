import {PacketContext} from "packet-system";
import UserHandler from "../lib/UserHandler";
import {UserAuthPacket, UserAuthPacketAdapter} from "@swiftmessage/common";

export default class UserAuthPacketAdapterWrapper extends UserAuthPacketAdapter {
    private readonly userHandler: UserHandler

    constructor(userHandler: UserHandler) {
        super();
        this.userHandler = userHandler;
    }

    onReceive(context: PacketContext<UserAuthPacket>): void {
        this.userHandler.addUser(context.getFrom(), context.getPacket().getUsername())
    }
}