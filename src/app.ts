import {PolarisLogger} from "./PolarisLogger";
import {PolarisLogProperties} from "./PolarisLogProperties";
import {ApplicationLogProperties} from "./entities/ApplicationLogProperties";

class MyLogger extends PolarisLogger {
    constructor() {
        super(null, MyLogger.getApplicationProperties(),'log-file.log');
    }

    private static getApplicationProperties(): ApplicationLogProperties {
        return new ApplicationLogProperties("p01aris-10gs", "polaris-logs", "v1", "dev", "component");
    }
}

class MyProperties extends PolarisLogProperties {
    private num: number;
    private bool: boolean;

    setNum(num: number): MyProperties {
        this.num = num;
        return this;
    }

    setBool(bool: boolean): MyProperties {
        this.bool = bool;
        return this;
    }
}

let myLogger = new MyLogger();
let props = new MyProperties("hello world").setNum(1).setBool(false)
    .setElapsedTime(939393).setRealityType("foo").setRealityId("123123")
    .setCustomProperties({
        "foo": "bar",
        "hello": "world",
        "number": 123,
        "json": {
            "secret": true
        }
    });

myLogger.info(props);
myLogger.warn(props);
myLogger.debug(props);
myLogger.trace(props);
myLogger.error(props);
