import {Packet} from "packet-system";

export default class ContactRemovalPacket extends Packet {
    public static readonly PACKET_NAME = "ContactRemoval"

    private readonly username: string

    constructor(username: string) {
        super();
        this.username = username;
    }

    getUsername(): string {
        return this.username
    }

    serialize(): string {
        return this.username;
    }

    type(): string {
        return ContactRemovalPacket.PACKET_NAME;
    }
}