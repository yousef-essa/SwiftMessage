import {AddContactPacketAdapter} from "@swiftmessage/common";
import {AddContactPacket} from "@swiftmessage/common";
import {PacketContext} from "packet-system";
import user from "../../user";

export default class AddContactPacketAdapterWrapper extends AddContactPacketAdapter {
    onReceive(context: PacketContext<AddContactPacket>) {
        const username = context.getPacket().getUsername()

        user.getContactHandler().addContact(username)
    }
}