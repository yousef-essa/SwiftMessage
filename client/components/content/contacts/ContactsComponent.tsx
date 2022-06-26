import React from "react";
import styles from './Contacts.module.css'
import ContactItemComponent from "./item/ContactItemComponent";
import user from "../../../lib/user";

export default class ContactsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleClick = this.handleClick.bind(this)
        this.generateContactList = this.generateContactList.bind(this)

        user.getContactHandler().onAddContact = () => this.forceUpdate()
    }

    handleClick(props: any) {
        this.props.onClick(props)
    }

    generateContactList() {
        let keyIndex = 0

        return user.getContactHandler().getContacts().map(user => <ContactItemComponent key={keyIndex++} username={user.getUsername()} onClick={this.handleClick}/>)
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