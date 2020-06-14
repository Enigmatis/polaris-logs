import * as Transport from 'winston-transport';
import { DailyRotateFileConfiguration } from './daily-rotate-file-configuration';
import { LogstashConfiguration } from './logstash-configuration';
import { LoggerLevel } from './logger-level';

export interface LoggerConfiguration {
    loggerLevel: LoggerLevel;
    logstashConfigurations?: LogstashConfiguration[];
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logFilePath?: string;
    dailyRotateFileConfiguration?: DailyRotateFileConfiguration;
    customTransports?: Transport[];
}
