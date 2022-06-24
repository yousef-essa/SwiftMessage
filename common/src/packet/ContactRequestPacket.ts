import {Packet} from "packet-system";

export default class ContactRequestPacket extends Packet {
    public static readonly PACKET_NAME = "ContactRequest"

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
        return ContactRequestPacket.PACKET_NAME;
    }
}

export enum ContactRequestResponseType {
    INVALID_SENDER = "INVALID_SENDER",
    INVALID_TARGET = "INVALID_TARGET",
    ACCEPTED = "ACCEPTED",
}