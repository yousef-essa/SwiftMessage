import user from "../../../lib/user";

function User(props: any) {
    return <>
        <p>Please enter your username to get started:</p>
        <input onKeyPress={(event) => {
            if (event.key != 'Enter') {
                return
            }

            const target = event.target as HTMLInputElement;
            user.getPersonalHandler().createUser(target.value)
            target.value = ""

            props.onUsernameSubmit()
        }}/>
    </>
}

export default User