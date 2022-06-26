import React from "react";
import ContactsComponent from "./contacts/ContactsComponent";
import styles from './content.module.css'
import ChatComponent from "./chat/ChatComponent";

export default class ContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.container}>
                <ContactsComponent/>
                <ChatComponent/>
            </div>
        );
    }
}