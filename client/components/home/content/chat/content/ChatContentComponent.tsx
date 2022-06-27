import React from "react";
import styles from "./chat-content.module.css";
import MessageComponent from "./message/MessageComponent";
import user from "../../../../../lib/user";
import contact from "../../../../../lib/contact";
import { Message } from "@swiftmessage/common";

export default class ChatContentComponent extends React.Component<any, any> {
    private ref: HTMLDivElement | null = null

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevState: Readonly<any>, snapshot?: any) {
        this.scrollToBottom()
    }

    scrollToBottom() {
        this.ref?.scrollBy(0, this.ref?.scrollHeight)
    }

    generateMessages() {
        const targetUsername = contact.getCurrentContent();
        const selfUser = user.getPersonalHandler()
            .getUser();

        const selfMessages = selfUser.getMessagesTo(targetUsername) ?? []
        const targetMessages = user.getUser(targetUsername)?.getMessagesTo(selfUser.getUsername()) ?? []

        targetMessages.map((value: Message) => selfMessages.push(value))
        return selfMessages.sort((a, b) => {
            const first = a.getDate().getTime();
            const second = b.getDate().getTime();
            if (first > second) {
                return 1
            } else if (second > first) {
                return -1
            }
            return 0
        })
    }

    render() {
        let index = 0
        const messages = this.generateMessages().map((message: Message) => {
            return <MessageComponent key={index++} username={message.getFrom()} content={message.getMessage()}/>
        })

        return (
            <div ref={ref => this.ref = ref} className={styles.container}>
                <div className={styles.items}>
                    {messages}
                </div>
            </div>
        );
    }
}