import {UserAuthResponsePacket, UserAuthResponsePacketAdapter} from "@swiftmessage/common";
import {PacketContext} from "packet-system";
import {UserAuthResponseType} from "@swiftmessage/common";
import user from "../../user";

export default class UserAuthResponsePacketAdapterWrapper extends UserAuthResponsePacketAdapter {
    onReceive(context: PacketContext<UserAuthResponsePacket>) {
        const packet = context.getPacket()
        const username = packet.getUsername()
        const reason = packet.getReason()

        if (reason == UserAuthResponseType.USERNAME_TAKEN) {
            user.getPersonalHandler().setUsernameFailure(username, reason)
        } else {
            user.getPersonalHandler().setUsernameSuccess(username)
        }
    }
}