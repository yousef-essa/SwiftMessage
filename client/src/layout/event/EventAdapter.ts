import LayoutEvent from "./LayoutEvent";

export default abstract class EventAdapter<E extends LayoutEvent<any>, T extends Event> {
    abstract serialize(event: T): E
}