import {PolarisLogger} from "./PolarisLogger";
import {PolarisLogProperties} from "./PolarisLogProperties";
import {ApplicationLogProperties} from "./entities/ApplicationLogProperties";

let polarisLogger = new PolarisLogger(null);
let applicationProps = new ApplicationLogProperties("p01aris-10gs", "polaris-logs", "v1", "dev", "component");
let props = new PolarisLogProperties("hello world").setCustomProperties({
    "foo": "bar",
    "number": 123,
    "json": {
        "secret": true
    }
}).setElapsedTime(939393).setRealityType("foo").setRealityId("123123").setApplicationProperties(applicationProps);

polarisLogger.info(props);
polarisLogger.warn(props);
polarisLogger.debug(props);
polarisLogger.trace(props);
polarisLogger.error(props);
