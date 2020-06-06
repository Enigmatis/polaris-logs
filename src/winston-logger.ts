import TCPTransport = require('logstash-tcp-wins');
import { UDPTransport } from 'udp-transport-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { SocketAddress } from './configurations/socket-address';

const timestampFormat: string = 'DD-MM-YYYY HH:mm:ss';

const consoleFullFormat = winston.format.combine(
    winston.format.timestamp({ format: timestampFormat }),
    winston.format.align(),
    winston.format.printf(info => {
        const { timestamp, level, message, ...args } = info;
        return `${timestamp} [${level}]: ${message} ${
            Object.keys(args).length ? `\n${JSON.stringify(args, null, 2)}` : ''
        }`;
    }),
);

const consoleShortFormat = winston.format.combine(
    winston.format.timestamp({ format: timestampFormat }),
    winston.format.align(),
    winston.format.printf(info => {
        const { timestamp, level, message, throwable } = info;
        return `${timestamp} [${level}]: ${message} ${
            throwable ? `\n${JSON.stringify(throwable, null, 2)}` : ''
        }`;
    }),
);

const logstashFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => {
        return JSON.stringify(info);
    }),
);

const customLevels = {
    levels: {
        fatal: 0,
        error: 1,
        warn: 2,
        info: 3,
        debug: 4,
        trace: 5,
    },
    colors: {
        fatal: 'bold redBG',
        error: 'red',
        warn: 'yellow',
        info: 'green',
        debug: 'blue',
        trace: 'magenta',
    },
};

export const createLogger = (loggerConfiguration: LoggerConfiguration) => {
    const logger = winston.createLogger({
        level: loggerConfiguration.loggerLevel,
        levels: customLevels.levels,
        format: winston.format.json(),
        exitOnError: false, // do not exit on handled exceptions
    });
    // tslint:disable:no-console
    logger.on('error', error => console.error('logger Error!', error));

    if (loggerConfiguration.udpConfigurations) {
        loggerConfiguration.udpConfigurations.forEach((udpConfiguration: SocketAddress) => {
            const udpTransport = new UDPTransport({
                host: udpConfiguration.host,
                port: udpConfiguration.port,
                format: logstashFormat,
            });
            udpTransport.on('error', (error: Error) =>
                logger.error(
                    `UDP transport Error! at UDP config: ${JSON.stringify(udpConfiguration)}`,
                    error,
                ),
            );
            logger.add(udpTransport);
        });
    }

    if (loggerConfiguration.tcpConfigurations) {
        loggerConfiguration.tcpConfigurations.forEach((tcpConfiguration: SocketAddress) => {
            const tcpTransport = new TCPTransport({
                host: tcpConfiguration.host,
                port: tcpConfiguration.port,
                format: logstashFormat,
                json: true,
            });
            tcpTransport.on('error', (error: Error) =>
                logger.error(
                    `TCP transport Error! at TCP config: ${JSON.stringify(tcpConfiguration)}`,
                    error,
                ),
            );
            logger.add(tcpTransport);
        });
    }

    winston.addColors(customLevels.colors);
    if (loggerConfiguration.writeToConsole) {
        logger.add(
            new winston.transports.Console({
                format: winston.format.combine(
                    winston.format.colorize(),
                    loggerConfiguration.writeFullMessageToConsole
                        ? consoleFullFormat
                        : consoleShortFormat,
                ),
            }),
        );
    }

    if (loggerConfiguration.dailyRotateFileConfiguration) {
        const dailyFileConf = loggerConfiguration.dailyRotateFileConfiguration;
        logger.add(
            new DailyRotateFile({
                format: logstashFormat,
                datePattern: 'DD-MM-YYYY',
                filename: `${dailyFileConf.directoryPath}${
                    dailyFileConf.fileNamePrefix
                }${'-%DATE%'}.${dailyFileConf.fileExtension}`,
                maxFiles: dailyFileConf.numberOfDaysToDeleteFile
                    ? `${dailyFileConf.numberOfDaysToDeleteFile}${'d'}`
                    : '30d',
            }),
        );
    } else if (loggerConfiguration.logFilePath) {
        logger.add(
            new winston.transports.File({
                format: logstashFormat,
                filename: loggerConfiguration.logFilePath,
            }),
        );
    }

    if (loggerConfiguration.customTransports) {
        loggerConfiguration.customTransports.forEach(customTransport => {
            logger.add(customTransport);
        });
    }

    return logger;
};
