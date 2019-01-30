import { DailyRotateFileConfiguration } from './daily-rotate-file-configuration';

export interface LoggerConfiguration {
    loggerLevel: string;
    logstashHost: string;
    logstashPort: number;
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logFilePath?: string;
    dailyRotateFileConfiguration?: DailyRotateFileConfiguration;
}
