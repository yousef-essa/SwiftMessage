import LayoutEvent from "./LayoutEvent";
import LayoutPage from "../LayoutPage";
import ClickEvent from "./default/click/ClickEvent";

export default class EventHandler {
    private readonly eventMap = new Map<string, LayoutEvent<any>>()
    private activeLayout: LayoutPage

    constructor() {
        this.registerEvent(new ClickEvent(null))
    }

    setActiveLayout(layout: LayoutPage) {
        this.activeLayout = layout
    }

    registerEvent(event: LayoutEvent<any>) {
        // if the given event has already been registered, do not continue
        if (this.eventMap.get(event.getEventId()) != null) {
            return
        }

        this.eventMap.set(event.getEventId(), event)
        // bind the event to the appropriate document's listener
        this.bindEvent(event)
    }

    unregisterEvent(id: string): boolean {
        return this.eventMap.delete(id)
    }

    bindEvent(layoutEvent: LayoutEvent<any>) {
        document.addEventListener(layoutEvent.getEventType(), (event) => {
            // if the active layout is not active, or the given event
            // is no longer registered, do not continue
            if (this.activeLayout == null || !this.eventMap.has(layoutEvent.getEventId())) {
                return
            }

            // if the active layout events does not contain
            // the given event, do not continue
            if (!this.activeLayout.getEvents().includes(layoutEvent.getEventType())) {
                return;
            }

            // serializes the given event to the appropriate layout event
            const serializedEvent = layoutEvent.getEventAdapter().serialize(event);

            // notify the active layout with the serizlied event
            this.activeLayout.onEvent(serializedEvent)
        })
    }
}