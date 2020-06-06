import * as Transport from 'winston-transport';
import { DailyRotateFileConfiguration } from './daily-rotate-file-configuration';
import { SocketAddress } from './socket-address';

export interface LoggerConfiguration {
    loggerLevel: string;
    udpConfigurations?: SocketAddress[];
    tcpConfigurations?: SocketAddress[];
    writeToConsole?: boolean;
    writeFullMessageToConsole?: boolean;
    logFilePath?: string;
    dailyRotateFileConfiguration?: DailyRotateFileConfiguration;
    customTransports?: Transport[];
}
