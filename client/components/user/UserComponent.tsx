import user from "../../lib/user";
import styles from "./user.module.css"

function onInputSubmit(event: React.KeyboardEvent) {
    if (event.key != 'Enter') {
        return
    }

    const target = event.target as HTMLInputElement;
    user.getPersonalHandler().createUser(target.value)
    target.value = ""
}

function User() {
    return <div className={styles.container}>
        <div className={styles.field}>
            <h2 className={styles.title}>Username</h2>
            <input className={styles.input} onKeyPress={(event) => {
                onInputSubmit(event)
            }}/>
        </div>

        <button className={styles.button}>Submit</button>
    </div>
}

export default User