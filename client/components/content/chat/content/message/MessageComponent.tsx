import React from "react";
import styles from './Message.module.css'

export default class MessageComponent extends React.Component<any, any> {
    render() {
        const username = this.props.username
        const content = this.props.content

        return (
            <div className={styles.container}>
                <div className={styles.username}>{username}</div>
                <div className={styles.content}>{content}</div>
            </div>
        );
    }
}