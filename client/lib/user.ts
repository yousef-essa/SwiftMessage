import {Message, User} from "@swiftmessage/common";
import PersonalHandler from "./handler/PersonalHandler";

class UserHandler {
    private readonly personalHandler = new PersonalHandler()
    private readonly userMap = new Map<string, User>()

    onMessageUpdate(): void {
    }

    addSelfMessage(recipientUsername: string, message: Message) {
        const sender = this.personalHandler.getUser()
        const recipient = this.getUserOrCreate(recipientUsername)

        if (!recipient.hasContact(sender.getUsername())) {
            recipient.addContact(sender)
        }

        console.log(`[DESPERATE; ${sender.getUsername()}] sender messages before: ${JSON.stringify(sender.getMessagesBy(recipientUsername))}`)
        sender.addMessage(recipient, message)
        console.log(`[DESPERATE; ${sender.getUsername()}] sender messages before: ${JSON.stringify(sender.getMessagesBy(recipientUsername))}`)

        console.log(`[${sender.getUsername()}] sent ${JSON.stringify(message)} to ${recipient.getUsername()}`)

        this.onMessageUpdate()
    }

    addMessage(senderUsername: string, message: Message) {
        const sender = this.getUserOrCreate(senderUsername)
        const recipient = this.personalHandler.getUser()

        if (!sender.hasContact(recipient.getUsername())) {
            sender.addContact(recipient)
        }

        sender.addMessage(recipient, message)
        console.log(`sent ${JSON.stringify(message)} to ${recipient.getUsername()}`)
        this.onMessageUpdate()
    }

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
    }

    getUser(username: string): User | null {
        return this.userMap.get(username) ?? null
    }

    getPersonalHandler(): PersonalHandler {
        return this.personalHandler
    }
}

const userHandler = new UserHandler()

export default userHandler