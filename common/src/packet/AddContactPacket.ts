import {Packet} from "packet-system";

export default class AddContactPacket extends Packet {
    public static readonly PACKET_NAME = "AddContact"
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
        return AddContactPacket.PACKET_NAME;
    }

}