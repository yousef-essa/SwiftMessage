import {Packet} from "packet-system";

export default class UserAuthPacket extends Packet {
    private readonly username: string

    constructor(username: string) {
        super();
        this.username = username
    }

    getUsername(): string {
        return this.username
    }

    type(): string {
        return UserAuthPacket.name;
    }
}