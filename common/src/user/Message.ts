export default class Message {
    private readonly from: string
    private readonly to: string
    private readonly message: string
    private readonly date: Date

    constructor(from: string, to: string, message: string, date: Date) {
        this.from = from;
        this.to = to;
        this.message = message;
        this.date = date;
    }

    static deserialize(serializedData: string): Message {
        const args = serializedData.split(" ")
        const from = args[0]
        const to = args[1]
        const date = args[2]
        const message = args.slice(3).join(" ")

        return new Message(from, to, message, new Date(date))
    }

    serialize(): string {
        return `${this.getFrom()} ${this.getTo()} ${this.getDate().toISOString()} ${this.getMessage()}`
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

    getDate(): Date {
        return this.date
    }
}