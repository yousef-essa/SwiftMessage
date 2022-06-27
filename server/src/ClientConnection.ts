import { WebSocket } from 'ws'
import {Connection} from "packet-system";
import crypto from "crypto"

export default class ClientConnection extends Connection {
    private readonly socket: WebSocket
    private readonly uuid = crypto.randomUUID().toString()
    private closed: boolean = false

    constructor(socket: WebSocket) {
        super()
        this.socket = socket;

        this.socket.onopen = () => {
            this.closed = false
        }

        this.socket.onclose = () => {
            this.closed = true
            this.onClose()
        }
    }

    id(): string {
        return this.uuid;
    }

    send(message: string) {
        this.socket.send(message)
    }

    close(): void {
        this.socket.close(1000, "The client has closed the connection.")
        this.onClose()
    }

    isClosed(): boolean {
        return this.closed
    }
}