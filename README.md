# polaris-logs
[![Build Status](https://travis-ci.com/Enigmatis/polaris-logs.svg?branch=develop)](https://travis-ci.com/Enigmatis/polaris-logs)
[![npm version](https://badge.fury.io/js/survey-monkey-streams.svg)](//npmjs.com/package/@enigmatis/polaris-logs?)

A node.js library that helps you create and use loggers according to a certain standard.

### LoggerConfiguration
Through this interface you should set the following configuration to the ``PolarisLogger``:

+ **loggerLevel** (*string*) - The level the logger is listening on, can be one of the following levels: ``fatal`` / 
``error`` / ``warn`` / ``info`` / ``trace`` / ``debug``
+ **logstashHost** (*string*)
+ **logstashPort** (*number*)
+ **writeToConsole** (*boolean - optional*) - Determines if the logger should write the logs to the console.
+ **writeFullMessageToConsole** (*boolean - optional*) - If you do decide to write logs to console, only the timestamp 
accompanied by the log level and message will be written, in order to see the whole log, which includes the properties 
that would be sent to the logstash, set this property to ``true``.

### ApplicationLogProperties
This interface represent the application configurable log properties.

Those properties are:
 + systemId
 + systemName
 + repositoryVersion
 + environment
 + component

### PolarisLogProperties
This interface represent the log properties that will be logged through the ``PolarisLogger``.

### PolarisLogger
This class interacts with the actual winston logger and responsible for logging the properties that was provided to him.

### Example

```TypeScript

import { ApplicationLogProperties, PolarisLogger, LoggerConfiguration } from '@enigmatis/polaris-logs';

const appProps: ApplicationLogProperties = {
    id: 'p0laris-l0gs',
    name: 'polaris-logs',
    repositoryVersion: 'v1',
    environment: 'environment',
    component: 'component',
};
const logConf: LoggerConfiguration = {
    loggerLevel: 'trace',
    logstashHost: '127.0.0.1',
    logstashPort: 3000,
    writeToConsole: true,
    writeFullMessageToConsole: true,
};

const logger = new PolarisLogger(appProps, logConf);

logger.fatal('hello world!');
logger.error('hello world!');
logger.warn('hello world!');
logger.info('hello world!');
logger.trace('hello world!');
logger.debug('hello world!');

```

For any additional help and requests, feel free to contact us :smile:
