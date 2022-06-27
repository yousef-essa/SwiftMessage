import {Connection} from "packet-system";
import {ContactRemovalPacket, User, UserAuthResponseType} from "@swiftmessage/common";
import server from "../server";

export default class UserHandler {
    private readonly connectionMap = new Map<string, Connection>()
    private readonly userMap = new Map<string, User>()

    addUser(connection: Connection, username: string) {
        const connectionId = connection.id();
        console.log(`Added user ${username} to the registry with ${connectionId} id!`)

        this.connectionMap.set(connectionId, connection)
        this.userMap.set(connectionId, new User(username, connection))
    }

    removeUser(connection: Connection) {
        const user = this.getUser(connection);
        if (user == undefined) {
            return
        }

        console.log(`Removed user ${user.getUsername()} from the registry with ${connection.id()} id!`)

        // sends a removal packet to all users that
        // are in contact with this soon-to-be nonexistent
        // user
        for (const contact of user.getAllContacts()) {
            server.getPacketHandler().send(new ContactRemovalPacket(user.getUsername()), contact.getConnection())
        }

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

    validateUsername(username: string, connection: Connection): UserAuthResponseType {
        if (this.hasUserByUsername(username)) {
            return UserAuthResponseType.USERNAME_TAKEN
        }
        this.addUser(connection, username)
        return UserAuthResponseType.ACCEPTED
    }

    hasUser(connection: Connection): boolean {
        return this.getUser(connection) != null
    }

    hasUserByUsername(username: string) {
        return this.getUserByUsername(username) != null
    }
}
