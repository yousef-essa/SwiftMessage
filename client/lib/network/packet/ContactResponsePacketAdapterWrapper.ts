import {ContactRequestResponseType, ContactResponsePacket, ContactResponsePacketAdapter } from "@swiftmessage/common";
import { PacketContext } from "packet-system";
import user from "../../user";
import contact from "../../contact";

export default class ContactResponsePacketAdapterWrapper extends ContactResponsePacketAdapter {
    onReceive(context: PacketContext<ContactResponsePacket>) {
        const packet = context.getPacket();
        const username = packet.getUsername()
        const reason = packet.getReason()

        console.log(`contact response for ${username} username for ${reason} reason`)

        if (reason == ContactRequestResponseType.ACCEPTED) {
            user.getContactHandler().addContact(username)
            return
        }

        contact.onContentError(reason)
    }
}