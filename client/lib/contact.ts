export class ContactHandler {
    private currentContent: string = ""

    onContentChange(): void {}

    setCurrentContent(username: string) {
        if (this.currentContent == username) {
            return
        }
        this.currentContent = username
        this.onContentChange()
    }

    getCurrentContent(): string {
        return this.currentContent
    }
}

const contactHandler = new ContactHandler()
export default contactHandler