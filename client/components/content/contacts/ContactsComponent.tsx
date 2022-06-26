import React from "react";
import styles from './contacts.module.css'
import AddContactComponent from "./add-contact/AddContactComponent";
import ContactsHeaderComponent from "./header/ContactsHeaderComponent";
import ContactsContentComponent from "./content/ContactsContentComponent";

export default class ContactsComponent extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                <ContactsHeaderComponent/>
                <ContactsContentComponent/>
                <AddContactComponent/>
            </div>
        );
    }
}