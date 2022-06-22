import React from "react";
import styles from './AddContact.module.css'
import user from "../../../../../lib/user";

export default class AddContactComponent extends React.Component<any, any> {
    private ref: HTMLButtonElement | null = null

    constructor(props: any) {
        super(props);
        this.state = {
            visible: false
        }

        this.toggleVisible = this.toggleVisible.bind(this)
        this.onContactSubmit = this.onContactSubmit.bind(this)
    }

    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        })
    }

    onContactSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        console.log(event.key)
        if (event.key != "Enter") {
            return
        }

        const inputElement = event.target as HTMLInputElement

        const value = inputElement.value
        console.log(`value: ${value}`)
        if (value.length == 0) {
            return;
        }

        const contactHandler = user.getContactHandler();
        if (user.getUsername() == value || contactHandler.hasContact(value)) {
            console.log(`${value} is already in your contacts list!`)
        } else {
            contactHandler.requestContact(value)
        }
        inputElement.value = ""
    }

    render() {
        const addContactElement = <div className={styles.contentHeader}>
            <div className={styles.contentTitle}>Add Contact</div>
            <input className={styles.contentInput} onKeyDown={this.onContactSubmit}/>
        </div>

        return (
            <div className={styles.container}>
                <button ref={ref => {
                    this.ref = ref
                }} onClick={() => {
                    this.toggleVisible()
                }} className={styles.button}>Add contact</button>

                {this.state.visible && addContactElement}
            </div>
        );
    }
}