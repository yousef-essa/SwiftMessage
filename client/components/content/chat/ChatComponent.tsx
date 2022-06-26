import React from "react";
import styles from './chat.module.css'
import ChatInputComponent from "./input/ChatInputComponent";
import MessageComponent from "./content/message/MessageComponent";
import ChatHeaderComponent from "./header/ChatHeaderComponent";
import ChatContentComponent from "./content/ChatContentComponent";
<<<<<<< Updated upstream
=======
import user from "../../../lib/user";
import contact from "../../../lib/contact";
import { Message, MessagePacket } from "@swiftmessage/common";
import client from "../../../lib/client";
import message from "../../../lib/message";
>>>>>>> Stashed changes

export default class ChatComponent extends React.Component<any, any> {
    private previousTarget: string | null = null

    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        }
<<<<<<< Updated upstream
        this.previousTarget = this.props.target
=======

        contact.onContentChange(() => {
            this.forceUpdate()
        })

        message.onMessageUpdate = () => {
            this.forceUpdate()
        }
>>>>>>> Stashed changes

        this.constructMessage = this.constructMessage.bind(this)
    }

    constructMessage(content: string) {
        if (this.props.target.username == null) {
            return
        }

<<<<<<< Updated upstream
        this.state.messages.push(`${this.props.username} ${content}`)
        this.setState({
            messages: this.state.messages
        })
    }

    resetMessages() {
        this.setState({
            messages: []
        })
=======
        const currentContent = contact.getCurrentContent();
        const messageData = new Message(username, currentContent, message);
        client.getPacketHandler().send(new MessagePacket(messageData, [currentContent]), client.getServer()!!)
>>>>>>> Stashed changes
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