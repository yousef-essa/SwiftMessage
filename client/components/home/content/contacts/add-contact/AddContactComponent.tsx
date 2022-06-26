import React from "react";
import styles from './add-contact.module.css'
import ContactElementComponent from "./element/ContactElementComponent";
import contact from "../../../../../lib/contact";

export default class AddContactComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showElement: false
        }

        this.showElement = this.showElement.bind(this)
        this.handleHide = this.handleHide.bind(this)

        contact.onContactSuccess = this.handleHide
    }

    toggleElementVisibility() {
        this.setState({
            showElement: !this.state.showElement
        })
    }

    showElement() {
        if (this.state.showElement) {
            return
        }
        this.toggleElementVisibility()
    }

    handleHide() {
        if (!this.state.showElement) {
            return
        }
        this.toggleElementVisibility()
    }

    render() {
        const showElement = this.state.showElement

        return (
            <div
                className={styles.container}
            >
                <button
                    onClick={() => {
                        this.showElement()
                    }}
                    className={styles.button}>Add Contact
                </button>

                {showElement && <ContactElementComponent onHide={this.handleHide}/>}
            </div>
        );
    }
}