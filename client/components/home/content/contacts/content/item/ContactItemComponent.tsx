import React from "react";
import styles from './contact-item.module.css'
import contact from "../../../../../../lib/contact";

export default class ContactItemComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(username: string) {
        contact.setCurrentContent(username)
    }

    render() {
        const username = this.props.username
        // const onlineDate = new Date()

        let containerStyle = styles.container
        if (contact.getCurrentContent() == username) {
            containerStyle += ` ${styles.selected}`
        }

        return (
            <div className={containerStyle} onClick={() => {
                this.handleClick(username)
            }}>
                <div className={styles.username}>{username}</div>
                {/*<div className={styles.onlineDate}>{`Last online: ${onlineDate.toLocaleTimeString()}`}</div>*/}
                {/*<div className={styles.onlineDate}>{`Last online: Unknown`}</div>*/}
            </div>
        );
    }
}