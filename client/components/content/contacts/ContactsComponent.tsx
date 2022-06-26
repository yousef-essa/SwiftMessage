import React from "react";
<<<<<<< Updated upstream
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

=======
import styles from './contacts.module.css'
import AddContactComponent from "./add-contact/AddContactComponent";
import ContactsHeaderComponent from "./header/ContactsHeaderComponent";
import ContactsContentComponent from "./content/ContactsContentComponent";

export default class ContactsComponent extends React.Component<any, any> {
>>>>>>> Stashed changes
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