import React from "react";
import styles from "./chat-header.module.css";
import contact from "../../../../../lib/contact";

export default class ChatHeaderComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const username = contact.getCurrentContent() ?? ""

        return (
            <div className={styles.header}>
                <h2 className={styles.title}>{username}</h2>
            </div>
        );
    }
}