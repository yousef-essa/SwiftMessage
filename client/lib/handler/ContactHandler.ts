import {ContactRequestPacket, User } from "@swiftmessage/common";
import client from "../client";

export default class ContactHandler {
    private readonly user: User

    constructor(user: User) {
        this.user = user;
    }

    hasContact(username: string): boolean {
        return this.user.hasContact(username);
    }

    requestContact(username: string) {
        client.getPacketHandler().send(new ContactRequestPacket(username), client.getServer()!!)
    }

    addContact(username: string) {
        this.user.addContact(new User(username))
        this.onAddContact()
    }

    onAddContact() {}

    getContacts(): User[] {
        return this.user.getAllContacts()
    }
}