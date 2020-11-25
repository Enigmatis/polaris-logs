![Polaris-logo](static/img/polaris-sm.png)

# polaris-logs

[![Build Status](https://travis-ci.com/Enigmatis/polaris-logs.svg?branch=develop)](https://travis-ci.com/Enigmatis/polaris-logs)
[![NPM version](https://img.shields.io/npm/v/@enigmatis/polaris-logs.svg?style=flat-square)](https://www.npmjs.com/package/@enigmatis/polaris-logs)

Write your logs easily in a standardized manner!

Ever wanted your logs to look pretty, to contain all the data you need in order to monitor your system, and to be written in an extremely easy way? You can now do this, using this library.

### LoggerConfiguration

Through this interface you should set the following configuration to the `PolarisLogger`:

-   **loggerLevel** (_LoggerLevel | string_) - The level the logger is listening on, can be one of the following levels: `fatal` /
    `error` / `warn` / `info` / `debug` / `trace`.
-   **logstashConfigurations** (_LogstashConfiguration[] - optional_) - Through this property you can set multiple logstash
    hosts, ports and protocols (**Notice that you can use `TCP`/`UDP` or `DYNAMIC` for each logstash config**).
    Use `DYNAMIC` to make polaris-logs decide which protocol to use according to the size of the log.
-   **writeToConsole** (_boolean - optional_) - Determines if the logger should write the logs to the console.
-   **writeFullMessageToConsole** (_boolean - optional_) - Set this property to `true`, if you decide to write full
    detailed logs to the console, since only the `timestamp` accompanied by the `log level`, `message` and
    `throwable` will be written by default.
-   **customTransports** (_Transport[] - optional_) - Array of custom transports you can provide to the winston logger.

### ApplicationProperties

This interface represents the application configurable log properties.

Those properties are:

-   id
-   name
-   version
-   environment
-   component

### PolarisLogProperties

This interface represents the log properties that will be logged through the `PolarisLogger`.

Those properties are:

-   `throwable`: The throwable object, if an error occurred. _any | Optional_
-   `elapsedTime`: You can provide an elapsed execution time of the operation. _number | Optional_
-   `logId`: You can provide a unique log id for each log. _string | Optional_
-   `customProperties`: You can provide custom properties, and it will be piped to the log. _any | Optional_
-   `response`: The response sent to the client. _any | Optional_
-   `messageId`: A unique identifier of the request/operation process. Something like a transaction id of a process. _string | Optional_
-   `recordId`: A unique identifier of the log(generated automatically). _string | Optional_
-   `eventKind`: The kind of event that happened. An event id. _string | Optional_
-   `eventKindDescription`: A description of the event kind that occurred. _EventKindDescription | Optional_
-   `reality`: You can provide The reality which the operation took place in. _Reality | Optional_
-   `request`: The request sent by the client. _Request | Optional_
-   `entity`: You can provide an entity of your query you want to record. Note that in case you log both entity and entities properties, entity will merged into entities and only entities will be logged. _Entity | Optional_
-   `entities`: You can provide entities of your query you want to record. Note that in case you log both entity and entities properties, entity will merged into entities and only entities will be logged. _Entity[] | Optional_
-   `upn`: The user identifier that executed the operation. _string | Optional_
-   `ip`: The ip address of the server that the request came from. _string | Optional_
-   `host`: The server/container name where the event occurred. _string | Optional_
-   `groupId`: The attributes that defines the relation between the entities to the event that occurred. _GroupId | Optional_
-   `operationalData`: The operational data . _object | Optional_

### PolarisLogger

This class interacts with the actual winston logger and responsible for logging provided properties.

### Example

```TypeScript

import {
    ApplicationProperties,
    LoggerConfiguration,
    LoggerLevel,
    LogstashConfiguration,
    LogstashProtocol,
    PolarisLogger,
} from '@enigmatis/polaris-logs';

const appProps: ApplicationProperties = {
    id: 'p0laris-l0gs',
    name: 'polaris-logs',
    version: 'v1',
    environment: 'environment',
    component: 'component',
};

const logstashConf: LogstashConfiguration[] = [
    {
        host: '127.0.0.1',
        port: 3000,
        protocol: LogstashProtocol.TCP,
    },
    {
        host: '8.8.8.8',
        port: 6000,
        protocol: LogstashProtocol.UDP,
    },
    {
        host: '127.0.0.1',
        port: 3000,
        protocol: LogstashProtocol.DYNAMIC,
    }
];

const logConf: LoggerConfiguration = {
    loggerLevel: LoggerLevel.TRACE,
    logstashConfigurations: logstashConf,
    writeToConsole: true,
    writeFullMessageToConsole: true,
};

const logger = new PolarisLogger(logConf, appProps);

logger.fatal('fatal message', { elapsedTime: 500, eventKind: 'foo' });
logger.error('error message', { elapsedTime: 15000, throwable: new Error('oops') });
logger.warn('warn message');
logger.info('info message');
logger.debug('debug message');
logger.trace('trace message');

```

For any additional help and requests, feel free to contact us :smile:
