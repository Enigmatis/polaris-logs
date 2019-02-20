import { DailyRotateFileConfiguration } from './daily-rotate-file-configuration';
import { LogstashConfiguration } from './logstash-configuration';

export interface LoggerConfiguration {
    loggerLevel: string;
    logstashConfiguration?: LogstashConfiguration;
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logFilePath?: string;
    dailyRotateFileConfiguration?: DailyRotateFileConfiguration;
}
