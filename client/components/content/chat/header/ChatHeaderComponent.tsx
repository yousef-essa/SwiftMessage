import React from "react";
<<<<<<< Updated upstream
import styles from "./ChatHeader.module.css";
import AddContactComponent from "./add-contact/AddContactComponent";
=======
import styles from "./chat-header.module.css";
import contact from "../../../../lib/contact";
>>>>>>> Stashed changes

export default class ChatHeaderComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }


    render() {
        const username = this.props.username ?? ""

        return (
            <div className={styles.header}>
                <h2 className={styles.title}>{username}</h2>
            </div>
        );
    }
}