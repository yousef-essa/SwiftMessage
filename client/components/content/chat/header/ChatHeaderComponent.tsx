import React from "react";
import styles from "./ChatHeader.module.css";
import AddContactComponent from "./add-contact/AddContactComponent";

export default class ChatHeaderComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }


    render() {
        const username = this.props.username ?? ""

        return (
            <div className={styles.header}>
                <h2 className={styles.title}>{username}</h2>
                <AddContactComponent/>
            </div>
        );
    }
}