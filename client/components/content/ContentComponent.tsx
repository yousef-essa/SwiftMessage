import React from "react";
import UserComponent from "../user/UserComponent";
import MainContentComponent from "./MainContentComponent";

export default class ContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}
    }

    handleUserSubmit(username: string) {
        console.log(`User submitted ${username} as their username!`)
        this.setState({
            username: username
        })
    }

    render() {
        const skipUser = this.props.skipUser ?? false
        let username = this.state.username
        let content

        if (skipUser || username) {
            if (skipUser) {
                username = "Anonymous"
            }

            content = <MainContentComponent username={username}/>
        } else {
            content = <UserComponent onUsernameSubmit={this.handleUserSubmit}/>
        }

        return (
            <div id="content" className="border">
                {content}
            </div>
        );
    }
}