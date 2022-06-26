import React from "react";
import styles from './chat-input.module.css'
import contact from "../../../../../lib/contact";
import InputComponent from "../../../../meta/input/InputComponent";

export default class ChatInputComponent extends React.Component<any, any> {
    private readonly textInput

    constructor(props: any) {
        super(props);

        this.textInput = React.createRef()

        this.submitValue = this.submitValue.bind(this)
        this.handleSubmitButton = this.handleSubmitButton.bind(this)
    }

    handleSubmitButton() {
        const inputElement = this.textInput.current as HTMLInputElement;

        const value = inputElement.value
        if (value == "") {
            return
        }

        this.submitValue(value)
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
                <InputComponent
                    instance={this.textInput}
                    className={styles.input}
                    placeholder="You can type your messages here"
                    onSubmit={this.submitValue}
                />
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