import EventAdapter from "../../EventAdapter";
import ClickEvent from "./ClickEvent";

export default class ClickEventAdapter extends EventAdapter<ClickEvent, MouseEvent> {
    serialize(event: MouseEvent): ClickEvent {
        return new ClickEvent(event.target as Element)
    }
}