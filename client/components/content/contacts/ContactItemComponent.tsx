import React from "react";
import styles from './ContactItem.module.css'

export default class ContactItemComponent extends React.Component<any, any> {
    render() {
        const username = this.props.username
        const onlineDate = new Date()

        return (
            <div className={styles.box}>
                <div className={styles.username}>{username}</div>
                <div className={styles.onlineDate}>{`Last online: ${onlineDate.toLocaleTimeString()}`}</div>
            </div>
        );
    }
}