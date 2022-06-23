import {PacketHandler} from "packet-system";
import UserAuthPacketAdapter from "./packet/UserAuthPacketAdapter";
import ContactRequestPacketAdapter from "./packet/ContactRequestPacketAdapter";
import ContactResponsePacketAdapter from "./packet/ContactResponsePacketAdapter";
import MessagePacketAdapter from "./packet/MessagePacketAdapter";
import MessageReceivePacketAdapter from "./packet/MessageReceivePacketAdapter";

export default class CommonPacketHandler extends PacketHandler {
    registerDefaultPackets() {
        super.registerDefaultPackets();

        // server packets receivers here
        this.registerPacket(new UserAuthPacketAdapter())
        this.registerPacket(new ContactRequestPacketAdapter())
        this.registerPacket(new MessagePacketAdapter())

        // client packet receivers here
        this.registerPacket(new ContactResponsePacketAdapter())
        this.registerPacket(new MessageReceivePacketAdapter())
    }
}