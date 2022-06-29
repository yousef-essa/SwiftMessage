import user from "../../user";
import {PacketContext} from "packet-system";
import {ContactAddPacket, ContactAddPacketAdapter} from "@swiftmessage/common";

export default class ContactAddPacketAdapterWrapper extends ContactAddPacketAdapter {
    onReceive(context: PacketContext<ContactAddPacket>) {
        const username = context.getPacket().getUsername()

        user.getPersonalHandler().getContactHandler().addContact(username)
    }
}