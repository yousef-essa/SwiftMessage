import React from "react";
import styles from './ChatInput.module.css'

export default class ChatInputComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const onMessageSubmit = this.props.onMessageSubmit
        return (
            <div className={styles.container}>
                <input className={styles.input} onKeyPress={(event) => {
                    if (event.key != 'Enter') {
                        return
                    }

                    const target = event.target as HTMLInputElement;
                    onMessageSubmit(target.value)
                    target.value = ""
                }}/>
                <button className={styles.button}>Send</button>
            </div>
        );
    }
}