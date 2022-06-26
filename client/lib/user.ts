<<<<<<< Updated upstream
import {User, UserAuthPacket} from "@swiftmessage/common";
import ContactHandler from "./handler/ContactHandler";
import client from "./client";
=======
import {User} from "@swiftmessage/common";
import PersonalHandler from "./handler/PersonalHandler";
>>>>>>> Stashed changes

class UserHandler {
    private user: User | null = null
    private contactHandler: ContactHandler | null = null

<<<<<<< Updated upstream
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
=======
    addUser(user: User) {
        this.userMap.set(user.getUsername(), user)
    }

    getUserOrCreate(username: string): User {
        let user = this.getUser(username)

        if (user == null) {
            user = new User(username, null!!)
            this.addUser(user)
            console.log(`created user instance of ${username}`)
        }
        return user
>>>>>>> Stashed changes
    }

    getContactHandler(): ContactHandler {
        return this.contactHandler!!
    }

    getUsername() {
        return this.user?.getUsername() ?? ""
    }
}

const instance = new UserHandler()
export default instance