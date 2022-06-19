import React from "react";
import styles from './Chat.module.css'
import ChatInputComponent from "./input/ChatInputComponent";
import MessageComponent from "./content/message/MessageComponent";
import ChatHeaderComponent from "./header/ChatHeaderComponent";
import ChatContentComponent from "./content/ChatContentComponent";

export default class ChatComponent extends React.Component<any, any> {
    private previousTarget: string | null = null

    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        }
        this.previousTarget = this.props.target

        this.constructMessage = this.constructMessage.bind(this)
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

    resetMessages() {
        this.setState({
            messages: []
        })
    }

    render() {
        const targetProps = this.props.target
        const username = targetProps.username

        if (targetProps != this.previousTarget) {
            this.previousTarget = targetProps
            this.resetMessages()
        }

        return (
            <div className={styles.container}>
                <ChatHeaderComponent username={username}/>
                <ChatContentComponent messages={this.state.messages}/>
                <ChatInputComponent onMessageSubmit={this.constructMessage}/>
            </div>
        );
    }
}