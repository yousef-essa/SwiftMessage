import {Packet} from "packet-system";

export default class ContactAddPacket extends Packet {
    public static readonly PACKET_NAME = "ContactAdd"
    private readonly username: string

    constructor(username: string) {
        super();
        this.username = username;
    }

    getUsername(): string {
        return this.username
    }

    serialize(): string {
        return this.getUsername();
    }

    type(): string {
        return ContactAddPacket.PACKET_NAME;
    }
}