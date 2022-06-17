import User from "./User";

export default class Message {
    private readonly from: User
    private readonly to: User
    private readonly message: string

    constructor(from: User, to: User, message: string) {
        this.from = from;
        this.to = to;
        this.message = message;
    }

    getFrom(): User {
        return this.from
    }

    getTo(): User {
        return this.to
    }

    getMessage(): string {
        return this.message
    }
}