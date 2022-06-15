import LayoutPage from "./LayoutPage";
import LayoutUtil from "./LayoutUtil";
// import * as fs from "fs"

export default class LayoutHandler {
    private readonly layoutMap = new Map<string, LayoutPage>()
    private readonly parentElement: HTMLElement

    private readonly defaultLayout: LayoutPage | null

    constructor(parentElement: HTMLElement, defaultPageLayout: LayoutPage = null) {
        this.parentElement = parentElement

        if (defaultPageLayout != null) {
            this.registerLayoutPage(defaultPageLayout)
        }
        this.defaultLayout = defaultPageLayout
    }

    load() {
        if (this.defaultLayout == null) {
            throw new Error('Attempted to load a default layout that does not exist.')
        }
        this.loadPage(this.defaultLayout)
    }

    loadPage(page: LayoutPage) {
        const pageRender = page.render();
        if (!pageRender.includes(".html")) {
            throw new Error("Attempted to load a non-html file type: " + pageRender)
        }

        fetch(`./public/${pageRender}`)
            .then(content => content.text())
            .then(innerHtml => {
                const dummyElement = LayoutUtil.createElementBy(innerHtml)

                for (let i = 0; i < dummyElement.children.length; i++) {
                    const element = dummyElement.children.item(i)
                    if (element.id == 'root') {
                        console.log(element.childNodes.length)
                        element.childNodes.forEach((value, index: any)  => {
                            console.log(index)
                            dummyElement.append(value.cloneNode(true))
                        })

                        dummyElement.removeChild(element)
                        console.log('removing root')
                    }
                }

                this.updateParentContentBy(dummyElement)
            })
    }

    updateParentContentBy(element: HTMLDivElement) {
        this.parentElement.innerHTML = element.innerHTML
    }

    findLayoutPageBy(key: string): LayoutPage | undefined {
        return this.layoutMap.get(key)
    }

    registerLayoutPage(page: LayoutPage) {
        this.layoutMap.set(page.getId(), page)
    }

    unregisterLayoutPage(key: string): boolean {
        return this.layoutMap.delete(key)
    }
}