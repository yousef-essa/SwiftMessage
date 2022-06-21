import {PacketHandler} from "packet-system";
import UserAuthPacketAdapter from "./packet/UserAuthPacketAdapter";
import ContactRequestPacketAdapter from "./packet/ContactRequestPacketAdapter";
import BadContactPacketAdapter from "./packet/BadContactPacketAdapter";
import AddContactPacketAdapter from "./packet/AddContactPacketAdapter";

export default class CommonPacketHandler extends PacketHandler {
    registerDefaultPackets() {
        super.registerDefaultPackets();

        // server packets receivers here
        this.registerPacket(new UserAuthPacketAdapter())
        this.registerPacket(new ContactRequestPacketAdapter())

        // client packet receivers here
        this.registerPacket(new AddContactPacketAdapter())
        this.registerPacket(new BadContactPacketAdapter())
    }
}