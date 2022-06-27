import {User} from "@swiftmessage/common";
import PersonalHandler from "./handler/PersonalHandler";

class UserHandler {
    private readonly personalHandler = new PersonalHandler()
    private readonly userMap = new Map<string, User>()

    addUser(user: User) {
        this.userMap.set(user.getUsername(), user)
    }

    removeUser(username: string) {
        this.userMap.delete(username)
    }

    getUserOrCreate(username: string): User {
        let user = this.getUser(username)

        if (user == null) {
            user = new User(username, null!!)
            this.addUser(user)
            console.log(`created user instance of ${username}`)
        }
        return user
    }

    getUser(username: string): User | null {
        return this.userMap.get(username) ?? null
    }

    getPersonalHandler(): PersonalHandler {
        return this.personalHandler
    }
}

const instance = new UserHandler()
export default instance