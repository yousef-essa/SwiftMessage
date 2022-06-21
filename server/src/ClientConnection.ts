import { WebSocket } from 'ws'
import {Connection} from "packet-system";
import crypto from "crypto"

export default class ClientConnection extends Connection {
    private readonly socket: WebSocket
    private readonly uuid = crypto.randomUUID().toString()

    constructor(socket: WebSocket) {
        super()
        this.socket = socket;
    }

    id(): string {
        return this.uuid;
    }

    send(message: string) {
        this.socket.send(message)
    }

    close(): void {
        // will be implemented soon
    }

    isClosed(): boolean {
        // will be implemented soon
        return false;
    }
}