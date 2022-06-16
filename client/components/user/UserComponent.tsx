import {NextPage} from "next";

function User(props: any) {
    return <>
        <p>Please enter your username to get started:</p>
        <input onKeyPress={(event) => {
            if (event.key != 'Enter') {
                return
            }

            const target = event.target as HTMLInputElement;
            if (props.onUsernameSubmit(target.value)) {
                target.value = ""
            }
        }}/>
    </>
}

export default User