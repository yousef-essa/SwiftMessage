import {ContactRequestResponseType, ContactResponsePacket, ContactResponsePacketAdapter } from "@swiftmessage/common";
import { PacketContext } from "packet-system";
import user from "../../user";

export default class ContactResponsePacketAdapterWrapper extends ContactResponsePacketAdapter {
    onReceive(context: PacketContext<ContactResponsePacket>) {
        const packet = context.getPacket();
        const username = packet.getUsername()
        const reason = packet.getReason()

        console.log(`contact response for ${username} username for ${reason} reason`)

        if (reason == ContactRequestResponseType.ACCEPTED) {
            user.getPersonalHandler().getContactHandler().addContact(username)
            return
        }

        // else, send an error popout or something here...
    }
}