import {PolarisLogger} from "./PolarisLogger";
import {PolarisLogProperties} from "./PolarisLogProperties";
import {EventKindDescriptionLogProperty} from "./entities/EventKindDescriptionLogProperty";

let event = new EventKindDescriptionLogProperty();
let polarisLogger = new PolarisLogger(null);
let props = new PolarisLogProperties("hello world").setCustomProperties({
    "foo": "bar",
    "number": 123,
    "json": {
        "secret": true
    }
}).setElapsedTime(939393).setRealityType("foo").setRealityId("123123").setRequestingSystemName("request")
    .setEventKindDescription(event.setSystemId("890").setRequestingSystemId("hhh"));

polarisLogger.info(props);
polarisLogger.warn(props);
polarisLogger.debug(props);
