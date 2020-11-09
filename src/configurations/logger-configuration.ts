import * as Transport from 'winston-transport';
import { LogstashConfiguration } from './logstash-configuration';
import { LoggerLevel } from './logger-level';

export interface LoggerConfiguration {
    loggerLevel: LoggerLevel;
    logstashConfigurations?: LogstashConfiguration[];
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    customTransports?: Transport[];
}
