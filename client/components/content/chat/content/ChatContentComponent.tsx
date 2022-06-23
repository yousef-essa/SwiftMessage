import React from "react";
import styles from "./ChatContent.module.css";
import MessageComponent from "./message/MessageComponent";
import user from "../../../../lib/user";
import contact from "../../../../lib/contact";
import { Message } from "@swiftmessage/common";

export default class ChatContentComponent extends React.Component<any, any> {
    private ref: HTMLDivElement | null = null

    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        this.scrollToBottom()
    }

    scrollToBottom() {
        this.ref?.scrollBy(0, this.ref?.scrollHeight)
    }

    generateMessages() {
        const targetUsername = contact.getCurrentContent();
        const selfUser = user.getPersonalHandler()
            .getUser();

        const selfMessages = selfUser.getMessagesBy(targetUsername) ?? []
        const targetMessages = user.getUser(targetUsername)?.getMessagesBy(selfUser.getUsername()) ?? []

        targetMessages.map((value: Message) => selfMessages.push(value))
        return selfMessages
    }

    render() {
        let index = 0
        const messages = this.generateMessages().map((message: Message) => {
            return <MessageComponent key={index++} username={message.getFrom()} content={message.getMessage()}/>
        })

        return (
            <div ref={ref => this.ref = ref} className={styles.content}>
                {messages}
            </div>
        );
    }
}