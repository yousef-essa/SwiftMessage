import { Connection } from "packet-system";
import Message from "./Message";

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
        return this.contactMap.has(username)
    }

    addContact(user: User) {
        this.contactMap.set(user.getUsername(), user)
        this.messageMap.set(user, [])
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
            if (user.getUsername() != recipient) {
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