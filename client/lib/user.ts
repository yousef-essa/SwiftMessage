import {User} from "@swiftmessage/common";

class UserHandler {
    private user: User | null = null

    isCreated(): boolean {
        return this.user != null
    }

    createUser(username: string) {
        this.user = new User(username)
    }

    getUser(): User {
        return this.user!!
    }
}

const userHandler = new UserHandler()

export default userHandler