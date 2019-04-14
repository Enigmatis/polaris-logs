import * as Transport from 'winston-transport';
import { DailyRotateFileConfiguration } from './daily-rotate-file-configuration';
import { LogstashConfiguration } from './logstash-configuration';

export interface LoggerConfiguration {
    loggerLevel: string;
    logstashConfigurations?: LogstashConfiguration[];
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logFilePath?: string;
    dailyRotateFileConfiguration?: DailyRotateFileConfiguration;
    timezone?: string;
    customTransports?: Transport[];
}
