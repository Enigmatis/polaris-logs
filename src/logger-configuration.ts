export interface LoggerConfiguration {
    loggerLevel: string;
    logstashHost: string;
    logstashPort: number;
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logFilePath?: string;
    dailyLogFile?: boolean;
    numberOfDaysToDeleteFile?: number;
}
