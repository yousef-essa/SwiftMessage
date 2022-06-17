import Message from "./Message";

export default class User {
    private readonly username: string
    private readonly messageMap = new Map<User, Message[]>()

    constructor(username: string) {
        this.username = username;
    }

    addMessage(user: User, message: Message) {
        const messages = this.messageMap.get(user) ?? []
        messages.push(message)

        this.messageMap.set(user, messages)
    }

    getUsername(): string {
        return this.username
    }

    getMessagesBy(username: string): Message[] | null {
        for (const [key, value] of Object.entries(this.messageMap.entries())) {
            const user = key as unknown as User
            if (user.getUsername() != username) {
                continue
            }

            return [...value]
        }
        return null
    }
}