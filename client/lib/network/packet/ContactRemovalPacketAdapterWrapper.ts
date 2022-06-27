import {PacketContext} from "packet-system";
import {ContactRemovalPacketAdapter, ContactRemovalPacket} from "@swiftmessage/common";

import user from "../../user";

export default class ContactRemovalPacketAdapterWrapper extends ContactRemovalPacketAdapter {
    onReceive(context: PacketContext<ContactRemovalPacket>) {
        const username = context.getPacket().getUsername()

        user.removeUser(username)
        user.getPersonalHandler().getContactHandler().removeContact(username)
    }
}