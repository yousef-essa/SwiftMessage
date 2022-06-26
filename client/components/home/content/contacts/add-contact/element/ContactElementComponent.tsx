import React from "react";
import styles from "./contact-element.module.css"
import user from "../../../../../../lib/user";
import contact from "../../../../../../lib/contact";
import { ContactRequestResponseType } from "@swiftmessage/common";
import InputComponent from "../../../../../meta/input/InputComponent";

export default class ContactElementComponent extends React.Component<any, any> {
    private readonly textInput

    constructor(props: any) {
        super(props);
        this.state = {
            visible: true
        }

        this.textInput = React.createRef()

        this.displayError = this.displayError.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmitButton = this.handleSubmitButton.bind(this)

        contact.onContentError = this.displayError
    }

    componentDidMount() {
        (this.textInput.current as HTMLElement).focus()
    }

    displayError(reason: ContactRequestResponseType) {
        this.setState({
            displayError: true
        })
    }

    handleBlur(event: React.FocusEvent) {
        console.log(event.relatedTarget)

        // if the event occurred due to user
        // tabbing out, do not continue
        if (event.relatedTarget == null) {
            return
        }

        if (event.currentTarget.contains(event.relatedTarget)) {
            return
        }

        this.hideElement()
    }

    handleSubmitButton(event: React.MouseEvent) {
        event.preventDefault()

        const inputElement = this.textInput.current as HTMLInputElement
        const value = inputElement.value

        if (value == "") {
            return
        }

        this.submitValue(value)
    }

    submitValue(value: string) {
        const personalHandler = user.getPersonalHandler();
        const contactHandler = personalHandler.getContactHandler();
        if (personalHandler.getUsername() == value || contactHandler.hasContact(value)) {
            console.log(`${value} is already in your contacts list!`)
        }

        contactHandler.requestContact(value)
        // this.hideElement()
    }

    hideElement() {
        if (!this.state.visible) {
            return
        }

        this.props.onHide()
    }

    render() {
        const displayError = this.state.displayError

        return (
            <div className={styles.filter}>
                <div
                    className={styles.container}
                    onBlur={this.handleBlur}
                    tabindex="-1"
                >
                    <div className={styles.field}>
                        <div className={styles.title}>Enter the contact's name</div>

                        <InputComponent
                            instance={this.textInput}
                            className={styles.input}
                            placeholder={"Insert the contact's username here"}
                            displayError={displayError}
                            onSubmit={this.submitValue}
                        />
                    </div>

                    <button
                        className={styles.button}
                        onClick={this.handleSubmitButton}
                    >Submit</button>
                </div>
            </div>
        );
    }
}