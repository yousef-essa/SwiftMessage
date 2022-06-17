import {Packet} from "packet-system";
import User from "../user/User";

export default class UserAuthPacket extends Packet {
    public static readonly PACKET_NAME = "UserAuth"
    private readonly user: User

    constructor(user: User) {
        super();
        this.user = user
    }

    getUser(): User {
        return this.user
    }

    type(): string {
        return UserAuthPacket.PACKET_NAME;
    }

    serialize(): string {
        return this.user.getUsername()
    }
}