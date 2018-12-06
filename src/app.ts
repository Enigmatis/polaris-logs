import {PolarisLogger} from "./PolarisLogger";
import {PolarisLogProperties} from "./PolarisLogProperties";
import {ApplicationLogProperties} from "./entities/ApplicationLogProperties";

class CustomLogger extends PolarisLogger {
    constructor() {
        super(null, CustomLogger.getApplicationProperties());
    }

    private static getApplicationProperties(): ApplicationLogProperties {
        return new ApplicationLogProperties("p01aris-10gs", "polaris-logs", "v1", "dev", "component");
    }
}

let customLogger = new CustomLogger();
let props = new PolarisLogProperties("hello world").setCustomProperties({
    "foo": "bar",
    "number": 123,
    "json": {
        "secret": true
    }
}).setElapsedTime(939393).setRealityType("foo").setRealityId("123123");

customLogger.info(props);
customLogger.warn(props);
customLogger.debug(props);
customLogger.trace(props);
customLogger.error(props);
