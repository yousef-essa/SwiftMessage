import ContactHandler from "./ContactHandler";
import client from "../client";
import { User, UserAuthPacket } from "@swiftmessage/common";
import user from "../user";

export default class PersonalHandler {
    private user: User | null = null
    private contactHandler: ContactHandler | null = null

    isCreated(): boolean {
        return this.user != null
    }

    createUser(username: string) {
        if (this.user != null) {
            return
        }

        this.user = new User(username, null!!)
        this.contactHandler = new ContactHandler(this.user)
        client.getPacketHandler().send(new UserAuthPacket(username), client.getServer()!!)

        user.addUser(this.user)
    }

    getContactHandler(): ContactHandler {
        return this.contactHandler!!
    }

    getUser(): User {
        return this.user!!
    }

    getUsername() {
        return this.user?.getUsername() ?? ""
    }
}