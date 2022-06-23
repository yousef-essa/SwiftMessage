import {Packet} from "packet-system";
import Message from "../user/Message";

export default class MessagePacket extends Packet {
    static readonly PACKET_NAME = "message"

    private readonly message: Message
    private readonly recipients: string[]

    constructor(message: Message, recipients: string[]) {
        super();
        this.message = message;
        this.recipients = recipients;
    }

    getMessage(): Message {
        return this.message
    }

    getRecipients(): string[] {
        return this.recipients
    }

    serialize(): string {
        return `${this.getMessage().serialize()};${this.getRecipients().join(" ")}`;
    }

    type(): string {
        return MessagePacket.PACKET_NAME;
    }
}