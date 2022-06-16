import LayoutPage from "../LayoutPage";
import LayoutEvent from "../event/LayoutEvent";
import ClickEvent from "../event/default/click/ClickEvent";
import {Events} from "../event/Events";
import InputSubmitEvent from "../event/default/inputsubmit/InputSubmitEvent";

export default class DefaultLayoutPage extends LayoutPage {
    constructor() {
        super(Events.CLICK, Events.INPUT_SUBMIT);
    }

    onEvent(event: LayoutEvent<any>): void {
        if (event instanceof ClickEvent) {
            console.log('click event got triggered!')
        } else if (event instanceof InputSubmitEvent) {
            console.log('input submit got triggered!')
        }
    }

    render(): string {
        return `default_layout.html`
    }

    getId(): string {
        return "default";
    }
}