import React from "react";
import styles from "./ChatContent.module.css";
import MessageComponent from "./message/MessageComponent";

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

    render() {
        let index = 0
        const messages = this.props.messages.map((message: string) => {
            return message.split(" ")
        }).map((content: string[]) => {
            return <MessageComponent key={index++} username={content[0]} content={content.slice(1).join(" ")}/>
        })

        return (
            <div ref={ref => this.ref = ref} className={styles.content}>
                {messages}
            </div>
        );
    }
}