import React from "react";
import styles from "./contacts-content.module.css"
import ContactItemComponent from "./item/ContactItemComponent";
import user from "../../../../../lib/user";
import contact from "../../../../../lib/contact";

export default class ContactsContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.generateContactList = this.generateContactList.bind(this)

        user.getPersonalHandler().getContactHandler().onAddContact = () => this.forceUpdate()
        contact.onContentChange(() => {
            this.forceUpdate()
        })
    }

    generateContactList() {
        let keyIndex = 0
        return user.getPersonalHandler().getContactHandler()
            .getContacts()
            .map(user => <ContactItemComponent key={keyIndex++} username={user.getUsername()}/>)
    }

    render() {
        const contacts = this.generateContactList()

        return (
            <div className={styles.container}>
                {contacts}
            </div>
        );
    }
}