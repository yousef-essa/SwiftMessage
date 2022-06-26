import React from "react";
import styles from './chat-input.module.css'
import contact from "../../../../../lib/contact";

export default class ChatInputComponent extends React.Component<any, any> {
    private readonly textInput

    constructor(props: any) {
        super(props);

        this.textInput = React.createRef()
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.handleSubmitButton = this.handleSubmitButton.bind(this)
    }

    handleKeyPress(event: React.KeyboardEvent) {
        if (event.key != 'Enter') {
            return
        }

        const target = event.target as HTMLInputElement;
        this.validateInputValue(target)
    }

    handleSubmitButton() {
        const inputElement = this.textInput.current as HTMLInputElement;
        this.validateInputValue(inputElement)
    }

    validateInputValue(inputElement: HTMLInputElement) {
        const value = inputElement.value
        if (value == "") {
            return
        } else {
            this.submitValue(value)
        }

        inputElement.value = ""
    }

    submitValue(value: string) {
        this.props.onMessageSubmit(value)
    }

    render() {
        if (contact.getCurrentContent() == "") {
            return null
        }

        return (
            <div className={styles.container}>
                <input ref={this.textInput} className={styles.input} onKeyPress={this.handleKeyPress}/>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.button}
                        onClick={this.handleSubmitButton}
                    >Send
                    </button>
                </div>
            </div>
        );
    }
}