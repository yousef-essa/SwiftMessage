import React from "react";
import styles from "./contact-element.module.css"
import user from "../../../../../lib/user";
import contact from "../../../../../lib/contact";
import { ContactRequestResponseType } from "@swiftmessage/common";

export default class ContactElementComponent extends React.Component<any, any> {
    private readonly textInput

    constructor(props: any) {
        super(props);
        this.state = {
            visible: true
        }

        this.textInput = React.createRef()

        this.displayError = this.displayError.bind(this)
        this.onContactSubmit = this.onContactSubmit.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.handleSubmitButton = this.handleSubmitButton.bind(this)

        contact.onContentError = this.displayError
    }

    componentDidMount() {
        (this.textInput.current as HTMLElement).focus()
    }

    displayError(reason: ContactRequestResponseType) {
        this.setState({
            displayError: reason
        })
    }

    onContactSubmit(event: React.KeyboardEvent<HTMLInputElement>) {
        console.log(event.key)
        if (event.key != "Enter") {
            this.resetStyle()
            return
        }

        const inputElement = event.target as HTMLInputElement

        const value = inputElement.value
        this.validateValue(value)
    }

    hideElement() {
        if (!this.state.visible) {
            return
        }

        this.resetStyle()
        this.props.onHide()
    }

    resetStyle() {
        if (this.state.displayError) {
            this.setState({
                displayError: undefined
            })
        }
    }

    handleBlur(event: React.FocusEvent) {
        console.log(event.target)
        if (event.currentTarget.contains(event.relatedTarget)) {
            return
        }

        this.hideElement()
    }

    handleSubmitButton() {
        const inputElement = this.textInput.current as HTMLInputElement
        this.validateValue(inputElement.value)
    }

    validateValue(value: string) {
        if (value == "") {
            return
        }

        this.submitValue(value)
        this.resetInput()
    }

    submitValue(value: string) {
        const personalHandler = user.getPersonalHandler();
        const contactHandler = personalHandler.getContactHandler();
        if (personalHandler.getUsername() == value || contactHandler.hasContact(value)) {
            console.log(`${value} is already in your contacts list!`)
        }

        contactHandler.requestContact(value)
        this.hideElement()
    }

    resetInput() {
        const inputElement = this.textInput.current as HTMLInputElement
        inputElement.value = ""
    }

    render() {
        const displayError = this.state.displayError
        const error = (displayError && styles.error) ?? ""

        return (
            <div
                tabIndex="-1"
                className={styles.container}
                onBlur={this.handleBlur}
            >
                <div className={styles.field}>
                    <div className={styles.title}>Enter the contact's name</div>
                    <input
                        ref={this.textInput}
                        className={styles.input + " " + error} onKeyDown={this.onContactSubmit}/>
                </div>

                <button
                    className={styles.button}
                    onClick={this.handleSubmitButton}
                >Submit</button>
            </div>
        );
    }
}