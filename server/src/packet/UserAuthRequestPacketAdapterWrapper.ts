import {PacketContext, PacketUtil} from "packet-system";
import UserHandler from "../lib/UserHandler";
import {
    UserAuthRequestPacket,
    UserAuthRequestPacketAdapter, UserAuthResponsePacket
} from "@swiftmessage/common";

export default class UserAuthRequestPacketAdapterWrapper extends UserAuthRequestPacketAdapter {
    private readonly userHandler: UserHandler

    constructor(userHandler: UserHandler) {
        super();
        this.userHandler = userHandler;
    }

    onReceive(context: PacketContext<UserAuthRequestPacket>): void {
        const username = context.getPacket().getUsername()
        const connection = context.getFrom()
        const reason = this.userHandler.validateUsername(username, connection);

        PacketUtil.reply(context, new UserAuthResponsePacket(username, reason))
    }
}