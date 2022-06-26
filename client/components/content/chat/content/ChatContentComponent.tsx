import React from "react";
import styles from "./chatcontent.module.css";
import MessageComponent from "./message/MessageComponent";

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

<<<<<<< Updated upstream
=======
    generateMessages() {
        const targetUsername = contact.getCurrentContent();
        const selfUser = user.getPersonalHandler()
            .getUser();

        const selfMessages = selfUser.getMessagesTo(targetUsername) ?? []
        const targetMessages = user.getUser(targetUsername)?.getMessagesTo(selfUser.getUsername()) ?? []

        targetMessages.map((value: Message) => selfMessages.push(value))
        return selfMessages
    }

>>>>>>> Stashed changes
    render() {
        let index = 0
        const messages = this.props.messages.map((message: string) => {
            return message.split(" ")
        }).map((content: string[]) => {
            return <MessageComponent key={index++} username={content[0]} content={content.slice(1).join(" ")}/>
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