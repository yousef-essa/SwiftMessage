import {Connection} from "packet-system";
import {User} from "@swiftmessage/common";

export default class UserHandler {
    private readonly userMap = new Map<User, Connection>()

    addUser(user: User, connection: Connection) {
        this.userMap.set(user, connection)
    }

    removeUser(user: User) {
        this.userMap.delete(user)
    }
}
