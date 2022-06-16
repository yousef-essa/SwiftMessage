import React from "react";
import ContactsComponent from "./contacts/ContactsComponent";
import styles from './MainContent.module.css'

export default class MainContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const username = this.props.username
        return (
            <div className={styles.style}>
                <ContactsComponent/>
            </div>
        );
    }
}