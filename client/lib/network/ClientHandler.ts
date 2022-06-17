import {Connection, PacketHandler} from "packet-system";
import ServerConnection from "./ServerConnection";
import {CommonPacketHandler} from "@swiftmessage/common";

export default class ClientHandler {
    private static REGEX: RegExp = /(?<=\[).+?(?=\])/

    private readonly port: number = 9000
    private readonly packetHandler: PacketHandler

    private server: WebSocket | null = null
    private serverWrapper: Connection | null = null

    constructor(port: number) {
        this.port = port
        this.packetHandler = new CommonPacketHandler({
            debug: true
        })

        this.onServerConnection = this.onServerConnection.bind(this)
        this.onServerMessage = this.onServerMessage.bind(this)
        this.onServerDisconnection = this.onServerDisconnection.bind(this)
    }

    connect() {
        this.server = new WebSocket(`ws://localhost:${this.port}`)

        if (this.server == null) {
            console.log('Unable to connect to the server. Please ensure the server is up and running well.')
            return
        }

        this.server.onopen = () => {
            this.serverWrapper = new ServerConnection(this.server!!)

            this.onServerConnection(this.serverWrapper)

            this.server!!.onmessage = (event) => {
                const message = event.data.toString()
                const packetType = ClientHandler.type(message)

                this.packetHandler.onReceive(packetType, this.serverWrapper!!, ClientHandler.cleanUp(packetType, message))
                this.onServerMessage(this.serverWrapper!!, message)
            }

            this.server!!.onclose = () => {
                this.onServerDisconnection(this.serverWrapper!!)
            }
        }
    }

    onServerConnection(connection: Connection) {
    }

    onServerMessage(connection: Connection, message: String) {
    }

    onServerDisconnection(connection: Connection) {
    }

    getPacketHandler() {
        return this.packetHandler
    }

    getServer() {
        return this.serverWrapper
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