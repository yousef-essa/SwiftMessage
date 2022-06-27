import React from "react";
import styles from './chat.module.css'
import ChatInputComponent from "./input/ChatInputComponent";
import ChatHeaderComponent from "./header/ChatHeaderComponent";
import ChatContentComponent from "./content/ChatContentComponent";
import user from "../../../../lib/user";
import contact from "../../../../lib/contact";
import { Message, MessagePacket } from "@swiftmessage/common";
import client from "../../../../lib/client";
import message from "../../../../lib/message";

export default class ChatComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            messages: []
        }

        contact.onContentChange(() => {
            this.forceUpdate()
        })

        message.onMessageUpdate = () => {
            this.forceUpdate()
        }

        this.constructMessage = this.constructMessage.bind(this)
    }

    constructMessage(message: string) {
        const username = user.getPersonalHandler().getUsername();
        if (username == "") {
            return
        }

        const currentContent = contact.getCurrentContent();
        const messageData = new Message(username, currentContent, message, new Date());
        client.getPacketHandler().send(new MessagePacket(messageData, [currentContent]), client.getServer()!!)
    }

    render() {
        return (
            <div className={styles.container}>
                <ChatHeaderComponent/>
                <ChatContentComponent/>
                <ChatInputComponent onMessageSubmit={this.constructMessage}/>
            </div>
        );
    }
}