import {PolarisLogger} from "./PolarisLogger";
import {PolarisLogProperties} from "./PolarisLogProperties";

let polarisLogger = new PolarisLogger(null);
let props = new PolarisLogProperties("hello world").setCustomProperties({
    "foo": "bar",
    "number": 123,
    "json": {
        "secret": true
    }
});
polarisLogger.info(props);
