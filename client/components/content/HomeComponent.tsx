import React from "react";
import HeaderComponent from "./header/HeaderComponent";
import ContentComponent from "./ContentComponent";

export default class HomeComponent extends React.Component<any, any> {
    render() {
        return (
            <div id="root">
                <HeaderComponent/>
                <ContentComponent skipUser={false}/>
            </div>
        );
    }
}