import {PacketContext} from "packet-system";
import {
    AddContactPacket,
    BadContactPacket,
    ContactRequestPacket,
    ContactRequestPacketAdapter,
    ContactRequestResponseType
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

        if (validateRequest == ContactRequestResponseType.ACCEPTED) {
            // send a good packet
            context.getPacketHandler().send(new AddContactPacket(targetUsername), senderConnection)
        } else {
            // send a bad packet
            context.getPacketHandler().send(new BadContactPacket(targetUsername, validateRequest), senderConnection)
        }
    }
}