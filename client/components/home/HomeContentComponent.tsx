import React from "react";
import ContentComponent from "./content/ContentComponent";
import user from "../../lib/user";
import UserComponent from "./content/user/UserComponent";

export default class HomeContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}

        user.getPersonalHandler().onCreateUser = () => this.forceUpdate()
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
            content = <ContentComponent/>
        } else {
            content = <UserComponent/>
        }

        return content
    }
}