import React from "react";
import ContactsComponent from "./contacts/ContactsComponent";
import styles from './MainContent.module.css'
import ChatComponent from "./chat/ChatComponent";

export default class MainContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className={styles.style}>
                <ContactsComponent/>
                <ChatComponent/>
            </div>
        );
    }
}