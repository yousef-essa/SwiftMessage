import React from "react";
import UserComponent from "./user/UserComponent";
import MainContentComponent from "./MainContentComponent";
import user from "../../lib/user";
import client from "../../lib/client";
import {UserAuthPacket} from "@swiftmessage/common";

export default class ContentComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {}

        this.handleUserSubmit = this.handleUserSubmit.bind(this)
    }

    handleUserSubmit() {
        client.getPacketHandler().send(new UserAuthPacket(user.getUser()), client.getServer()!!)
        this.forceUpdate()
    }

    render() {
        const skipUser = this.props.skipUser ?? false
        let username = user.getUser()?.getUsername()
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