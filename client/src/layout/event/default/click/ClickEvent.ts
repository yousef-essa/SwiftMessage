import LayoutEvent, {SimpleEventContext} from "../../LayoutEvent";
import ClickEventAdapter from "./ClickEventAdapter";
import {Events} from "../../Events";

export default class ClickEvent extends LayoutEvent<SimpleEventContext> {
    constructor(target: Element) {
        super(Events.CLICK, 'onClick', new SimpleEventContext(target), new ClickEventAdapter());
    }
}