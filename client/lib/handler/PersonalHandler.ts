import ContactHandler from "./ContactHandler";
import client from "../client";
import { User, UserAuthRequestPacket, UserAuthResponseType } from "@swiftmessage/common";
import user from "../user";

export default class PersonalHandler {
    private user: User | null = null
    private contactHandler: ContactHandler | null = null

    isCreated(): boolean {
        return this.user != null
    }

    setUsernameFailure(username: string, reason: UserAuthResponseType) {
        this.onUsernameFailure(username, reason)
    }

    setUsernameSuccess(username: string) {
        this.createUser(username)
    }

    sendUsernameRequest(username: string) {
        if (username != "Anonymous") {
            client.getPacketHandler().send(new UserAuthRequestPacket(username), client.getServer()!!)
        } else {
            this.setUsernameSuccess(username)
        }
    }


    createUser(username: string) {
        if (this.user != null) {
            return
        }

        this.user = new User(username, null!!)
        this.contactHandler = new ContactHandler(this.user)

        user.addUser(this.user)
        this.onCreateUser()
    }

    onUsernameFailure(username: string, reason: UserAuthResponseType): void {
    }

    onCreateUser(): void {
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