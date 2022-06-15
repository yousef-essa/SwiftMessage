import LayoutPage from "../LayoutPage";

export default class DefaultLayoutPage extends LayoutPage {
    render(): string {
        return `default_layout.html`
    }

    getId(): string {
        return "default";
    }
}