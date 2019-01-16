export interface LoggerConfiguration {
    loggerLevel: string;
    logstashHost: string;
    logstashPort: number;
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logsFilePath?: string;
}
