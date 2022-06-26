import {NextPage} from "next";
import styles from "./header.module.css"

const Header: NextPage = () => {
    return <div className={`${styles.header} border-bottom`}>
        <h1 className={styles.title}>SwiftMessage</h1>
        <div className={styles.circle}/>
    </div>
}

export default Header