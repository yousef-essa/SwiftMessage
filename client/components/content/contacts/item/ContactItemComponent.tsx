import React from "react";
import styles from './ContactItem.module.css'

export default class ContactItemComponent extends React.Component<any, any> {
    render() {
        const username = this.props.username
        const onClick = this.props.onClick
        // const onlineDate = new Date()

        return (
            <div className={styles.box} onClick={() => {
                onClick(this.props)
            }}>
                <div className={styles.username}>{username}</div>
                {/*<div className={styles.onlineDate}>{`Last online: ${onlineDate.toLocaleTimeString()}`}</div>*/}
                <div className={styles.onlineDate}>{`Last online: Unknown`}</div>
            </div>
        );
    }
}