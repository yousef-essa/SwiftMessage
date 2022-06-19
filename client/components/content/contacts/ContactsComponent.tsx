import React from "react";
import styles from './Contacts.module.css'
import ContactItemComponent from "./item/ContactItemComponent";

export default class ContactsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(props: any) {
        this.props.onClick(props)
    }

    render() {
        return (
            <div id={styles.contacts}>
                <div className="header">
                    <h2 className={styles.title}>Contacts</h2>
                </div>

                <div className={styles.container}>
                    <ContactItemComponent username="Tofpu" onClick={this.handleClick}/>
                    <ContactItemComponent username="NextTofpu" onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}