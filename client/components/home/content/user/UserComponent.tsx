import user from "../../../../lib/user";
import styles from "./user.module.css"

import React from "react";
import { StringUtil, UserAuthResponseType } from "@swiftmessage/common";
import InputComponent from "../../../meta/input/InputComponent";

export default class UserComponent extends React.Component<any, any> {
    private readonly textInput

    constructor(props: any) {
        super(props);

        this.textInput = React.createRef()

        this.handleInputSubmit = this.handleInputSubmit.bind(this)
        this.handleSubmitButton = this.handleSubmitButton.bind(this)
        this.handleUsernameFailure = this.handleUsernameFailure.bind(this)
        this.displayError = this.displayError.bind(this)

        this.state = {
            displayError: false
        }

        user.getPersonalHandler().onUsernameFailure = this.handleUsernameFailure
    }

    handleSubmitButton() {
        const inputElement = this.textInput.current as HTMLInputElement
        const value = inputElement.value

        if (value == "") {
            return
        }

        this.handleInputSubmit(value)
        inputElement.value = ""
    }

    handleInputSubmit(value: string) {
        if (!this.isUsernameSafe(value)) {
            this.displayError()
            return
        }
        user.getPersonalHandler().sendUsernameRequest(value)
    }

    isUsernameSafe(username: string): boolean {
        return StringUtil.isUsernameSafe(username)
    }

    handleUsernameFailure(username: string, reason: UserAuthResponseType) {
        this.displayError()
    }

    displayError() {
        this.setState({
            displayError: true
        })
    }

    render() {
        const displayError = this.state.displayError

        return <div className={styles.container}>
            <div className={styles.field}>
                <h2 className={styles.title}>Username</h2>
                <InputComponent
                    instance={this.textInput}
                    className={styles.input}
                    placeholder={"Insert your username here"}
                    displayError={displayError}
                    onSubmit={this.handleInputSubmit}
                />
            </div>

            <button
                className={styles.button}
                onClick={this.handleSubmitButton}
            >Submit</button>
        </div>
    }
}