import user from "../../../../lib/user";
import styles from "./user.module.css"

import React from "react";
import { UserAuthResponseType } from "@swiftmessage/common";
import InputComponent from "../../../meta/input/InputComponent";

export default class UserComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.handleInputSubmit = this.handleInputSubmit.bind(this)
        this.handleUsernameFailure = this.handleUsernameFailure.bind(this)

        this.state = {
            displayError: false
        }

        user.getPersonalHandler().onUsernameFailure = this.handleUsernameFailure
    }

    handleInputSubmit(value: string) {
        user.getPersonalHandler().sendUsernameRequest(value)
    }

    handleUsernameFailure(username: string, reason: UserAuthResponseType) {
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
                    className={styles.input}
                    placeholder={"Insert your username here"}
                    displayError={displayError}
                    onSubmit={this.handleInputSubmit}
                />
            </div>

            <button className={styles.button}>Submit</button>
        </div>
    }
}