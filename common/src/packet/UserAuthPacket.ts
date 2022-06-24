import {Packet} from "packet-system";

export default class UserAuthPacket extends Packet {
    public static readonly PACKET_NAME = "UserAuth"
    private readonly username: string

    constructor(username: string) {
        super();
        this.username = username
    }

    getUsername(): string {
        return this.username
    }

    type(): string {
        return UserAuthPacket.PACKET_NAME;
    }

    serialize(): string {
        return this.getUsername()
    }
}