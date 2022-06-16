import LayoutEvent, {SimpleEventContext} from "../../LayoutEvent";
import ClickEventAdapter from "./ClickEventAdapter";
import {Events} from "../../Events";

export default class ClickEvent extends LayoutEvent<SimpleEventContext> {
    constructor(context: SimpleEventContext) {
        super(Events.CLICK, 'onClick', context, new ClickEventAdapter());
    }
}