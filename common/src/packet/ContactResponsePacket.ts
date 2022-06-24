import {Packet} from "packet-system";
import {ContactRequestResponseType} from "./ContactRequestPacket";

export default class ContactResponsePacket extends Packet {
    public static readonly PACKET_NAME = "ContactResponse"
    private readonly username: string
    private readonly reason: ContactRequestResponseType

    constructor(username: string, reason: ContactRequestResponseType) {
        super();
        this.username = username;
        this.reason = reason;
    }

    getUsername(): string {
        return this.username
    }

    getReason(): ContactRequestResponseType {
        return this.reason
    }

    serialize(): string {
        return `${this.getUsername()} ${this.getReason()}`;
    }

    type(): string {
        return ContactResponsePacket.PACKET_NAME;
    }
}