import {Connection} from "packet-system";

export default class ServerConnection extends Connection {
    private readonly socket: WebSocket

    constructor(socket: WebSocket) {
        super();
        this.socket = socket;
    }

    send(message: string) {
        this.socket.send(message)
    }
}