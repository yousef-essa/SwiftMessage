import {Connection} from "packet-system";

export default class ServerConnection extends Connection {
    private static readonly SERVER_ID = "IT_DOES_NOT_MATTER"
    private readonly socket: WebSocket
    private closed: boolean = false

    constructor(socket: WebSocket) {
        super();
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
        return ServerConnection.SERVER_ID;
    }

    send(message: string) {
        this.socket.send(message)
    }

    close(): void {
        this.socket.close(1000, "The client has disconnected.")
        this.onClose()
    }

    isClosed(): boolean {
        // will be implemented soon
        return this.closed
    }
}