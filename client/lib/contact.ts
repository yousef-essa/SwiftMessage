import { ContactRequestResponseType, StringUtil } from "@swiftmessage/common"

export class ContactHandler {
    private readonly listeners = new Map<string, Function[]>()
    private currentContent: string = ""

    onContentChange(callback: () => void): void {
        const callbacks = this.listeners.get('onContentChange') ?? []

        this.listeners.set('onContentChange', [...callbacks, callback])
    }

    setCurrentContent(username: string) {
        if (StringUtil.equals(this.currentContent, username)) {
            return
        }
        this.currentContent = username

        this.listeners.forEach((value, key) => {
            if (key != 'onContentChange') {
                return
            }

            for (const callback of value) {
                callback()
            }
        })
    }

    getCurrentContent(): string {
        return this.currentContent
    }

    onContentError(reason: ContactRequestResponseType) {
    }

    onContactSuccess() {
    }
}

const instance = new ContactHandler()
export default instance