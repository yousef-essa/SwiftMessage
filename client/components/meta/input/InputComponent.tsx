import React from "react";
import styles from "./input.module.css"

export default class InputComponent extends React.Component<any, any> {
    private reset = false
    private displayError: boolean | undefined = undefined

    constructor(props: any) {
        super(props);

        this.displayError = props.displayError
        this.state = {}

        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key != "Enter") {
            this.resetStyle()
            return
        }

        const inputElement = event.target as HTMLInputElement
        const value = inputElement.value

        if (value == "") {
            return
        }

        const onSubmit = this.props.onSubmit;
        if (onSubmit != undefined) {
            onSubmit(value)
        }

        inputElement.value = ""
    }

    resetStyle() {
        if (this.displayError != true) {
            return
        }

        this.displayError = false
        this.reset = true
        this.setState({
            reset: true
        })
    }

    shouldDisplayError(): boolean {
        const propsStatus = this.props.displayError

        if (propsStatus && (this.displayError == undefined)) {
            this.displayError = true
        }

        return this.displayError ?? false
    }

    resetValues() {
        this.displayError = undefined
    }

    render() {
        this.resetValues()

        const ref = this.props.instance
        let className = this.props.className ?? ""
        const value = this.props.placeholder ?? ""

        if (!this.reset && this.shouldDisplayError()) {
            className += ` error`
        }

        if (this.reset) {
            this.reset = false
        }

        return <input
            ref={ref}
            className={className}
            placeholder={value}
            onKeyPress={this.handleKeyPress}
        />
    }
}