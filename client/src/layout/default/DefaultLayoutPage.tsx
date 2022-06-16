import LayoutPage from "../LayoutPage";
import LayoutEvent from "../event/LayoutEvent";
import ClickEvent from "../event/default/click/ClickEvent";
import {Events} from "../event/Events";

export default class DefaultLayoutPage extends LayoutPage {
    constructor() {
        super(Events.CLICK);
    }

    onEvent(event: LayoutEvent<any>): void {
        if (event instanceof ClickEvent) {
            console.log('click event got triggered!')
        }
    }

    render(): string {
        return `default_layout.html`
    }

    getId(): string {
        return "default";
    }
}