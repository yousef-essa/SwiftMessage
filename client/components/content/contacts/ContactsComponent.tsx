import React from "react";
import styles from './Contacts.module.css'
import ContactItemComponent from "./ContactItemComponent";

export default class ContactsComponent extends React.Component<any, any> {
    render() {
        return (
            <div id={styles.contacts} className="border">
                <div className="header">
                    <h2 className={styles.title}>Contacts</h2>
                </div>

                <div className={styles.container}>
                    <ContactItemComponent username="Tofpu"/>
                    <ContactItemComponent username="NextTofpu"/>
                </div>
            </div>
        );
    }
}