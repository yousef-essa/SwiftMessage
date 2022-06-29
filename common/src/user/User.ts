import { Connection } from "packet-system";
import Message from "./Message";
import StringUtil from "../StringUtil";

export default class User {
    private readonly username: string
    private readonly connection: Connection
    private readonly contactMap = new Map<string, User>()
    private readonly messageMap = new Map<User, Message[]>()

    constructor(username: string, connection: Connection) {
        this.username = username;
        this.connection = connection
    }

    hasContact(username: string): boolean {
        return this.getContact(username) != null
    }

    addContact(user: User) {
        this.contactMap.set(user.getUsername(), user)
        this.messageMap.set(user, [])
    }

    getContact(username: string): User | null {
        // @ts-ignore
        for (const contactUser of this.contactMap.values()) {
            if (!StringUtil.equals(contactUser.getUsername(), username)) {
                continue
            }

            return contactUser
        }

        return null
    }

    removeContact(username: string) {
        const user = this.getContact(username)
        if (user == null) {
            return
        }

        this.contactMap.delete(user.getUsername())
        this.messageMap.delete(user)
    }

    getAllContacts(): User[] {
        return Array.from(this.contactMap.values())
    }

    addMessage(user: User, message: Message) {
        const messages = this.messageMap.get(user)
        if (messages == undefined) {
            return
        }

        messages.push(message)
    }

    getUsername(): string {
        return this.username
    }

    getConnection(): Connection {
        return this.connection
    }

    getMessagesTo(recipient: string): Message[] | null {
        // @ts-ignore
        for (const [user, value] of this.messageMap.entries()) {
            if (!StringUtil.equals(user.getUsername(), recipient)) {
                continue
            }

            return [...value]
        }
        return null
    }

    serialize(): string {
        return JSON.stringify(this)
    }
}