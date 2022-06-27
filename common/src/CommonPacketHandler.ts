import {PacketHandler} from "packet-system";
import UserAuthRequestPacketAdapter from "./packet/UserAuthRequestPacketAdapter";
import ContactRequestPacketAdapter from "./packet/ContactRequestPacketAdapter";
import ContactResponsePacketAdapter from "./packet/ContactResponsePacketAdapter";
import MessagePacketAdapter from "./packet/MessagePacketAdapter";
import MessageReceivePacketAdapter from "./packet/MessageReceivePacketAdapter";
import UserAuthResponsePacketAdapter from "./packet/UserAuthResponsePacketAdapter";
import ContactRemovalPacketAdapter from "./packet/ContactRemovalPacketAdapter";

export default class CommonPacketHandler extends PacketHandler {
    registerDefaultPackets() {
        super.registerDefaultPackets();

        // server packets receivers here
        this.registerPacket(new UserAuthRequestPacketAdapter())
        this.registerPacket(new ContactRequestPacketAdapter())
        this.registerPacket(new MessagePacketAdapter())

        // client packet receivers here
        this.registerPacket(new ContactResponsePacketAdapter())
        this.registerPacket(new ContactRemovalPacketAdapter())
        this.registerPacket(new MessageReceivePacketAdapter())
        this.registerPacket(new UserAuthResponsePacketAdapter())
    }
}