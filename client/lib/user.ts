import {User, UserAuthPacket} from "@swiftmessage/common";
import ContactHandler from "./handler/ContactHandler";
import client from "./client";

class UserHandler {
    private user: User | null = null
    private contactHandler: ContactHandler | null = null

    isCreated(): boolean {
        return this.user != null
    }

    createUser(username: string) {
        if (this.user != null) {
            return
        }

        this.user = new User(username)
        this.contactHandler = new ContactHandler(this.user)
        client.getPacketHandler().send(new UserAuthPacket(username), client.getServer()!!)
    }

    getContactHandler(): ContactHandler {
        return this.contactHandler!!
    }

    getUsername() {
        return this.user?.getUsername() ?? ""
    }
}

const userHandler = new UserHandler()

export default userHandler