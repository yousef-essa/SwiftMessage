import {Packet} from "packet-system";

export default class UserAuthRequestPacket extends Packet {
    public static readonly PACKET_NAME = "UserAuthRequest"
    private readonly username: string

    constructor(username: string) {
        super();
        this.username = username
    }

    getUsername(): string {
        return this.username
    }

    type(): string {
        return UserAuthRequestPacket.PACKET_NAME;
    }

    serialize(): string {
        return this.getUsername()
    }
}