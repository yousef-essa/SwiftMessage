import React from "react";
import styles from './Contacts.module.css'
import ContactItemComponent from "./item/ContactItemComponent";
import user from "../../../lib/user";
import contact from "../../../lib/contact";

export default class ContactsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.generateContactList = this.generateContactList.bind(this)

        user.getPersonalHandler().getContactHandler().onAddContact = () => this.forceUpdate()
    }

    generateContactList() {
        let keyIndex = 0
        return user.getPersonalHandler().getContactHandler().getContacts().map(user => <ContactItemComponent key={keyIndex++} username={user.getUsername()}/>)
    }

    render() {
        const contacts = this.generateContactList()

        return (
            <div id={styles.contacts}>
                <div className="header">
                    <h2 className={styles.title}>Contacts</h2>
                </div>

                <div className={styles.container}>
                    {contacts}
                </div>
            </div>
        );
    }
}