export default class LayoutUtil {
    static createElementBy(innerHtml: string): HTMLDivElement {
        const dummyElement = document.createElement('div')
        dummyElement.innerHTML = innerHtml
        return dummyElement
    }
}
