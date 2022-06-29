import {User, StringUtil} from "@swiftmessage/common";
import PersonalHandler from "./handler/PersonalHandler";
import {Connection} from "packet-system";

class UserHandler {
    private readonly personalHandler = new PersonalHandler()
    private readonly userMap = new Map<string, User>()

    private addUser(user: User) {
        this.userMap.set(user.getUsername(), user)
    }

    createUser(username: string, connection: Connection): User {
        const user = new User(username, connection)
        this.addUser(user)

        return user
    }

    removeUser(username: string) {
        this.userMap.delete(username)
    }

    getUserOrCreate(username: string): User {
        let user = this.getUser(username)

        if (user == null) {
            user = this.createUser(username, null!)
            console.log(`created user instance of ${username}`)
        }
        return user
    }

    getUser(username: string): User | null {
        // @ts-ignore
        for (const user of this.userMap.values()) {
            if (!StringUtil.equals(user.getUsername(), username)) {
                continue
            }
            return user
        }
        return null
    }

    getPersonalHandler(): PersonalHandler {
        return this.personalHandler
    }
}

const instance = new UserHandler()
export default instance