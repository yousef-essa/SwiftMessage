import {Connection} from "packet-system";
import {User} from "@swiftmessage/common";

export default class UserHandler {
    private readonly connectionMap = new Map<string, Connection>()
    private readonly userMap = new Map<string, User>()

    addUser(connection: Connection, username: string) {
        console.log(`Added user ${username} to the registry with ${connection.id()} id!`)

        this.connectionMap.set(connection.id(), connection)
        this.userMap.set(connection.id(), new User(username))
    }

    removeUser(connection: Connection) {
        console.log(`Removed user ${this.getUser(connection)?.getUsername()} from the registry with ${connection.id()} id!`)

        this.connectionMap.delete(connection.id())
        this.userMap.delete(connection.id())
    }

    getUser(connection: Connection): User | undefined {
        return this.userMap.get(connection.id())
    }

    getUserByUsername(username: string): User | null {
        for (const user of this.userMap.values()) {
            if (user.getUsername() != username) {
                continue
            }
            return user
        }
        return null
    }

    hasUser(connection: Connection): boolean {
        return this.getUser(connection) != null
    }

    hasUserByUsername(username: string) {
        return this.getUserByUsername(username) != null
    }
}
