import {PacketHandler} from "packet-system";
import UserAuthPacketAdapter from "./packet/UserAuthPacketAdapter";

export default class CommonPacketHandler extends PacketHandler {
    registerDefaultPackets() {
        super.registerDefaultPackets();
        this.registerPacket(new UserAuthPacketAdapter())
    }
}