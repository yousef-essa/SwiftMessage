import React from "react";
import styles from './Chat.module.css'
import ChatInputComponent from "./ChatInputComponent";
import MessageComponent from "./MessageComponent";

export default class ChatComponent extends React.Component<any, any> {
    private previousTarget: string | null = null
    private ref: HTMLDivElement | null = null

    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        }
        this.previousTarget = this.props.target

        this.constructMessage = this.constructMessage.bind(this)
    }

    componentDidMount() {
        this.scrollToBottom()
    }

    componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
        this.scrollToBottom()

        if (this.previousTarget != this.props.target) {
            this.previousTarget = this.props.target
            this.setState({
                messages: []
            })
        }
    }

    scrollToBottom() {
        this.ref?.scrollBy(0, this.ref?.scrollHeight)
    }

    constructMessage(content: string) {
        if (this.props.target.username == null) {
            return
        }

        this.state.messages.push(`${this.props.username} ${content}`)
        this.setState({
            messages: this.state.messages
        })
    }

    render() {
        const targetProps = this.props.target
        const username = targetProps.username ?? ""

        let index = 0
        const messages = this.state.messages.map((message: string) => {
            return message.split(" ")
        }).map((content: string[]) => {
            return <MessageComponent key={index++} username={content[0]} content={content.slice(1).join(" ")}/>
        })

        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{username}</h2>
                </div>

                <div ref={ref => this.ref = ref} className={styles.chatBox}>
                    {messages}
                </div>

                <ChatInputComponent onMessageSubmit={this.constructMessage}/>
            </div>
        );
    }
}