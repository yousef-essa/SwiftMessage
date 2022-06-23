import React from "react";
import UserComponent from "./user/UserComponent";
import MainContentComponent from "./MainContentComponent";
import user from "../../lib/user";

export default class ContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}

        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    handleUserSubmit() {
        this.forceUpdate()
    }

    render() {
        let skipUser = this.props.skipUser
        let username = user.getPersonalHandler().getUsername()
        let content

        if (skipUser && username.length == 0) {
            user.getPersonalHandler().createUser("Anonymous")
            username = "Anonymous"
        }

        if (username.length != 0) {
            content = <MainContentComponent/>
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