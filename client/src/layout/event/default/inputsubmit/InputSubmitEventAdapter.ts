import EventAdapter from "../../EventAdapter";
import InputSubmitEvent, {InputEventContext} from "./InputSubmitEvent";

export default class InputSubmitEventAdapter extends EventAdapter<InputSubmitEvent, KeyboardEvent> {
    serialize(event: KeyboardEvent): InputSubmitEvent {
        // if the element target is not an input,
        // suspend the serialization process
        if (!(event.target instanceof HTMLInputElement)) {
            return null
        }

        // if the input has not initiated a submit call,
        // suspend the serialization process
        if (event.key != 'Enter') {
            return null
        }

        const target = event.target as HTMLInputElement;
        return new InputSubmitEvent(new InputEventContext(target, target.value));
    }
}