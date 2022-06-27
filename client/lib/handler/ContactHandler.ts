import {ContactRequestPacket, User } from "@swiftmessage/common";
import client from "../client";
import user from "../user";
import contact from "../contact";
import message from "../message";

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
        this.user.addContact(user.getUserOrCreate(username))
        this.onContactUpdate()
    }

    removeContact(username: string) {
        // reset the current contact if the
        // soon-to-be username contact matched
        if (contact.getCurrentContent() == username) {
            contact.setCurrentContent("")
        }

        this.user.removeContact(username)
        this.onContactUpdate()
    }

    onContactUpdate() {}

    getContacts(): User[] {
        return this.user.getAllContacts()
    }
}