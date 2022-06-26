import React from "react";
import HeaderComponent from "./header/HeaderComponent";
import HomeContentComponent from "./HomeContentComponent";
import styles from "./home.module.css"

export default class HomeComponent extends React.Component<any, any> {
    render() {
        return (
            <div className={styles.container}>
                <HeaderComponent/>
                <HomeContentComponent skipUser={false}/>
            </div>
        );
    }
}