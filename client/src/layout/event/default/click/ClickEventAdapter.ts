import EventAdapter from "../../EventAdapter";
import ClickEvent from "./ClickEvent";
import {SimpleEventContext} from "../../LayoutEvent";

export default class ClickEventAdapter extends EventAdapter<ClickEvent, MouseEvent> {
    serialize(event: MouseEvent): ClickEvent {
        return new ClickEvent(new SimpleEventContext(event.target as Element))
    }
}