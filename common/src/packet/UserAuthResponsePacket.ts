import {Packet} from "packet-system";

export default class UserAuthResponsePacket extends Packet {
    public static readonly PACKET_NAME = "UserAuthResponse"
    private readonly username: string
    private readonly reason: UserAuthResponseType

    constructor(username: string, reason: UserAuthResponseType) {
        super();
        this.username = username;
        this.reason = reason;
    }

    getUsername(): string {
        return this.username
    }

    getReason(): UserAuthResponseType {
        return this.reason
    }

    type(): string {
        return UserAuthResponsePacket.PACKET_NAME;
    }

    serialize(): string {
        return `${this.getUsername()};${this.getReason()}`
    }
}

export enum UserAuthResponseType {
    ACCEPTED= "ACCEPTED",
    USERNAME_TAKEN = "USERNAME_TAKEN"
}