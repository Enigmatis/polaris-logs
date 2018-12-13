# polaris-logs
A node.js library that helps you create and use loggers according to a certain standard.

### ApplicationLogProperties
This class represent the log properties that comes from a properties file.

Those properties are:
 + systemId
 + systemName
 + repositoryVersion
 + environment
 + component

### PolarisLoggerProperties
This class represent the log properties that will be logged through the ```PolarisLogger```.

### PolarisLogger
This class interacts with the actual winston logger and responsible for logging the properties that was provided to him.

### Example

If you would like to add your own properties you can extend those classes like this:

```TypeScript
class MyLogger extends PolarisLogger {
    constructor() {
        super(null, MyLogger.getApplicationProperties());
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

```

For any additional help and requests, feel free to contact us :smile:
