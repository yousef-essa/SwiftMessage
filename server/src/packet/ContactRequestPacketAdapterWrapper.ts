import {PacketContext} from "packet-system";
import {
    ContactRequestPacket,
    ContactRequestPacketAdapter,
    ContactResponsePacket
} from "@swiftmessage/common";
import ContactHandler from "../lib/ContactHandler";

export default class ContactRequestPacketAdapterWrapper extends ContactRequestPacketAdapter {
    private readonly contactHandler: ContactHandler

    constructor(contactHandler: ContactHandler) {
        super()
        this.contactHandler = contactHandler;
    }

    onReceive(context: PacketContext<ContactRequestPacket>): void {
        const senderConnection = context.getFrom();
        const targetUsername = context.getPacket().getUsername();
        const validateRequest = this.contactHandler.validateRequest(senderConnection, targetUsername)

        console.log(`sending ${targetUsername} for ${validateRequest} reason`)

        // send a response from that request
        context.getPacketHandler().send(new ContactResponsePacket(targetUsername, validateRequest), senderConnection)
    }
}