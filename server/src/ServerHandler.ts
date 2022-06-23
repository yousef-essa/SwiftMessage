import {WebSocket, WebSocketServer} from 'ws'
import {PacketHandler} from "packet-system";
import ClientConnection from "./ClientConnection";
import UserAuthPacketAdapterWrapper from "./packet/UserAuthPacketAdapterWrapper";
import UserHandler from "./lib/UserHandler";
import ContactRequestPacketAdapterWrapper from "./packet/ContactRequestPacketAdapterWrapper";
import ContactHandler from "./lib/ContactHandler";
import {CommonPacketHandler, ContactResponsePacketAdapter} from "@swiftmessage/common";
import MessagePacketAdapterWrapper from "./packet/MessagePacketAdapterWrapper";

export default class ServerHandler {
    private static REGEX: RegExp = /(?<=\[).+?(?=\])/

    private server: WebSocketServer | undefined
    private readonly port: number = 9000

    private readonly userHandler: UserHandler
    private readonly contactHandler: ContactHandler
    private readonly packetHandler: PacketHandler

    constructor(port: number) {
        this.port = port

        this.userHandler = new UserHandler()
        this.contactHandler = new ContactHandler(this.userHandler)
        this.packetHandler = new CommonPacketHandler({
            debug: true,
            isServer: true
        })

        this.packetHandler.registerPacket(new UserAuthPacketAdapterWrapper(this.userHandler))
        this.packetHandler.registerPacket(new ContactRequestPacketAdapterWrapper(this.contactHandler))
        this.packetHandler.registerPacket(new MessagePacketAdapterWrapper(this.userHandler))

        this.onClientConnection = this.onClientConnection.bind(this)
        this.onClientMessage = this.onClientMessage.bind(this)
        this.onClientDisconnection = this.onClientDisconnection.bind(this)
    }

    connect() {
        this.server = new WebSocketServer({
            port: this.port
        })

        this.server.on('connection', (connection: WebSocket) => {
            this.onClientConnection(connection)

            const clientConnection = new ClientConnection(connection)
            connection.on('message', (object) => {
                const message = object.toString()

                const packetType = ServerHandler.type(message)

                this.packetHandler.onReceive(packetType, clientConnection, ServerHandler.cleanUp(packetType, message))
                this.onClientMessage(connection, message)
            })
            connection.on('close', this.onClientDisconnection)
        })
    }

    onClientConnection(connection: WebSocket) {
    }

    onClientMessage(connection: WebSocket, message: String) {
    }

    onClientDisconnection(connection: WebSocket) {
    }

    getPacketHandler() {
        return this.packetHandler
    }

    static type(message: string) {
        let strings = this.REGEX.exec(message);

        const value: string | undefined = strings?.find((value, index) => index == 0);
        if (value == undefined) {
            return message
        }
        return value
    }

    private static cleanUp(type: String, message: String) {
        return message.replace(`[${type}] `, '')
    }
}