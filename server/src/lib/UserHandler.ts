import {Connection} from "packet-system";
import {User} from "@swiftmessage/common";

export default class UserHandler {
    private readonly userMap = new Map<Connection, User>()

    addUser(connection: Connection, username: string) {
        this.userMap.set(connection, new User(username))
    }

    removeUser(connection: Connection) {
        this.userMap.delete(connection)
    }
}
