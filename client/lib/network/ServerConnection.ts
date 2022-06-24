import {Connection} from "packet-system";

export default class ServerConnection extends Connection {
    private static readonly SERVER_ID = "IT_DOES_NOT_MATTER"
    private readonly socket: WebSocket

    constructor(socket: WebSocket) {
        super();
        this.socket = socket;
    }

    id(): string {
        return ServerConnection.SERVER_ID;
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