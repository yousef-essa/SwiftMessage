export default class Message {
    private readonly from: string
    private readonly to: string
    private readonly message: string

    constructor(from: string, to: string, message: string) {
        this.from = from;
        this.to = to;
        this.message = message;
    }

    static deserialize(serializedData: string): Message {
        const args = serializedData.split(" ")
        const from = args[0]
        const to = args[1]
        const message = args.slice(2).join("")

        return new Message(from, to, message)
    }

    serialize(): string {
        return `${this.getFrom()} ${this.getTo()} ${this.getMessage()}`
    }

    getFrom(): string {
        return this.from
    }

    getTo(): string {
        return this.to
    }

    getMessage(): string {
        return this.message
    }
}