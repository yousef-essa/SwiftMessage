import React from "react";
import HeaderComponent from "./content/header/HeaderComponent";
import ContentComponent from "./content/ContentComponent";

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