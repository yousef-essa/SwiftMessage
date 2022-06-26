import React from "react";
import ContactsComponent from "./contacts/ContactsComponent";
import styles from './content.module.css'
import ChatComponent from "./chat/ChatComponent";

export default class ContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    render() {
<<<<<<< Updated upstream
        const skipUser = this.props.skipUser ?? false
        let username = user.getUsername()
        let content

        if (skipUser || username) {
            if (skipUser) {
                username = "Anonymous"
            }

            content = <MainContentComponent username={username}/>
        } else {
            content = <UserComponent onUsernameSubmit={this.handleUserSubmit}/>
        }

=======
>>>>>>> Stashed changes
        return (
            <div className={styles.container}>
                <ContactsComponent/>
                <ChatComponent/>
            </div>
        );
    }
}