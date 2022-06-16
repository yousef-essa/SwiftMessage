import EventAdapter from "./EventAdapter";
import {Events} from "./Events";

export default abstract class LayoutEvent<E extends EventContext> {
    private readonly eventType: Events
    private readonly eventId: string
    private readonly eventContext: E
    private readonly eventAdapter: EventAdapter<any, any>

    protected constructor(eventType: Events, eventId: string, eventContext: E, eventAdapter: EventAdapter<any, any>) {
        this.eventType = eventType
        this.eventId = eventId
        this.eventContext = eventContext
        this.eventAdapter = eventAdapter
    }

    getEventType(): Events {
        return this.eventType
    }

    getEventId(): string {
        return this.eventId
    }

    getEventContext(): E {
        return this.eventContext
    }

    getEventAdapter(): EventAdapter<any, any> {
        return this.eventAdapter
    }
}

export abstract class EventContext {
    private readonly target: Element

    protected constructor(target: Element) {
        this.target = target
    }

    getTarget(): Element {
        return this.target
    }
}

export class SimpleEventContext extends EventContext {
    constructor(target: Element) {
        super(target);
    }
}