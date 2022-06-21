import {AddContactPacketAdapter} from "@swiftmessage/common";
import AddContactPacket from "@swiftmessage/common/dist/packet/AddContactPacket";
import {PacketContext} from "packet-system";

export default class AddContactPacketAdapterWrapper extends AddContactPacketAdapter {
    onReceive(context: PacketContext<AddContactPacket>) {
        const username = context.getPacket().getUsername()

        // do something with the given response
    }
}