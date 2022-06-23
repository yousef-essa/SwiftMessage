import {Packet} from "packet-system";
import Message from "../user/Message";

export default class MessageReceivePacket extends Packet {
    public static readonly PACKET_NAME = "messageReceive"
    private readonly sender: string
    private readonly message: Message

    constructor(sender: string, message: Message) {
        super();
        this.sender = sender;
        this.message = message;
    }

    getSender(): string {
        return this.sender
    }

    getMessage(): Message {
        return this.message
    }

    serialize(): string {
        return `${this.sender};${this.message.serialize()}`
    }

    type(): string {
        return MessageReceivePacket.PACKET_NAME;
    }
}