import {User} from "@swiftmessage/common";
import ContactHandler from "./handler/ContactHandler";

class UserHandler {
    private user: User | null = null
    private contactHandler: ContactHandler | null = null

    isCreated(): boolean {
        return this.user != null
    }

    createUser(username: string) {
        this.user = new User(username)
        this.contactHandler = new ContactHandler(this.user)
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