import LayoutEvent, {SimpleEventContext} from "../../LayoutEvent";
import {Events} from "../../Events";
import InputSubmitEventAdapter from "./InputSubmitEventAdapter";

export default class InputSubmitEvent extends LayoutEvent<InputEventContext> {
    constructor(eventContext: InputEventContext) {
        super(Events.INPUT_SUBMIT, 'inputSubmit', eventContext, new InputSubmitEventAdapter());
    }
}

export class InputEventContext extends SimpleEventContext {
    private readonly content: string

    constructor(target: Element, content: string) {
        super(target);
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }
}