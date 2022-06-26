import React from "react";
import styles from "./contacts-header.module.css"

export default class ContactsHeaderComponent extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.header}>
                <h2 className={styles.title}>Contacts</h2>
            </div>
        );
    }
}