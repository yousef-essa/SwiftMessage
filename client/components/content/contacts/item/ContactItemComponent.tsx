import React from "react";
import styles from './ContactItem.module.css'
import contact from "../../../../lib/contact";
import user from "../../../../lib/user";

export default class ContactItemComponent extends React.Component<any, any> {
    render() {
        const username = this.props.username
        // const onlineDate = new Date()

        return (
            <div className={styles.box} onClick={() => {
                contact.setCurrentContent(username)
            }}>
                <div className={styles.username}>{username}</div>
                {/*<div className={styles.onlineDate}>{`Last online: ${onlineDate.toLocaleTimeString()}`}</div>*/}
                <div className={styles.onlineDate}>{`Last online: Unknown`}</div>
            </div>
        );
    }
}