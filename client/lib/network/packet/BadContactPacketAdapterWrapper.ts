import {BadContactPacketAdapter} from "@swiftmessage/common";
import BadContactPacket from "@swiftmessage/common/dist/packet/BadContactPacket";
import {PacketContext} from "packet-system";

export default class BadContactPacketAdapterWrapper extends BadContactPacketAdapter {
    onReceive(context: PacketContext<BadContactPacket>) {
        const packet = context.getPacket();
        const username = packet.getUsername()
        const reason = packet.getReason()

        // do something with the given response
    }
}