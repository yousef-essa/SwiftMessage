import { Message } from "@swiftmessage/common";
import user from "./user";

export class MessageHandler {
    addSelfMessage(recipientUsername: string, message: Message) {
        const sender = user.getPersonalHandler().getUser()
        const recipient = user.getUserOrCreate(recipientUsername)

        if (!recipient.hasContact(sender.getUsername())) {
            recipient.addContact(sender)
        }

        console.log(`[DESPERATE; ${sender.getUsername()}] sender messages before: ${JSON.stringify(sender.getMessagesTo(recipientUsername))}`)
        sender.addMessage(recipient, message)
        console.log(`[DESPERATE; ${sender.getUsername()}] sender messages before: ${JSON.stringify(sender.getMessagesTo(recipientUsername))}`)

        console.log(`[${sender.getUsername()}] sent ${JSON.stringify(message)} to ${recipient.getUsername()}`)

        this.onMessageUpdate()
    }

    addMessage(senderUsername: string, message: Message) {
        const sender = user.getUserOrCreate(senderUsername)
        const recipient = user.getPersonalHandler().getUser()

        if (!sender.hasContact(recipient.getUsername())) {
            sender.addContact(recipient)
        }

        sender.addMessage(recipient, message)
        console.log(`sent ${JSON.stringify(message)} to ${recipient.getUsername()}`)
        this.onMessageUpdate()
    }

    onMessageUpdate(): void {
    }
}

const instance = new MessageHandler()
export default instance