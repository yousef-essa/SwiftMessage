import LayoutEvent from "./event/LayoutEvent";
import {Events} from "./event/Events";

export default abstract class LayoutPage {
    private readonly events: Events[] = []

    protected constructor(...events: Events[]) {
        events.map((event) => this.events.push(event))
    }

    abstract render(): string
    abstract onEvent(event: LayoutEvent<any>): void
    abstract getId(): string

    getEvents(): Events[] {
        return this.events
    }
}