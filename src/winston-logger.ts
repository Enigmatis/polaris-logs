import * as winston from 'winston';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { Logger } from './logger-with-custom-levels';
import { DynamicLogstashTransport } from './transports/dynamic-logstash-transport';
import { LogstashTransport } from 'winston-logstash-ts';
import { LogstashProtocol } from './configurations/logstash-protocol';

const consoleTimestampFormat = 'DD-MM-YYYY HH:mm:ss';
const logstashTimestampFormat = 'YYYY-MM-DD HH:mm:ssZ';

const consoleFullFormat = winston.format.combine(
    winston.format.timestamp({ format: consoleTimestampFormat }),
    winston.format.align(),
    winston.format.printf((info) => {
        const { timestamp, level, message, ...args } = info;
        return `${timestamp} [${level}]: ${message} ${
            Object.keys(args).length ? `\n${JSON.stringify(args, null, 2)}` : ''
        }`;
    }),
);

const consoleShortFormat = winston.format.combine(
    winston.format.timestamp({ format: consoleTimestampFormat }),
    winston.format.align(),
    winston.format.printf((info) => {
        const { timestamp, level, message, throwable } = info;
        return `${timestamp} [${level}]: ${message} ${
            throwable ? `\n${JSON.stringify(throwable, null, 2)}` : ''
        }`;
    }),
);

const logstashFormat = winston.format.combine(
    winston.format.timestamp({ format: logstashTimestampFormat }),
    winston.format.printf((info) => {
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

export const createLogger = (loggerConfiguration: LoggerConfiguration): Logger => {
    const logger = <Logger>winston.createLogger({
        level: loggerConfiguration.loggerLevel,
        levels: customLevels.levels,
        format: winston.format.json(),
        exitOnError: false, // do not exit on handled exceptions
    });
    logger.on('error', (error) => console.error('logger error!', error));

    if (loggerConfiguration.logstashConfigurations) {
        let logstashTransport: LogstashTransport | DynamicLogstashTransport;
        loggerConfiguration.logstashConfigurations.forEach((logstashConfiguration) => {
            if (logstashConfiguration.protocol === LogstashProtocol.DYNAMIC) {
                logstashTransport = new DynamicLogstashTransport({
                    host: logstashConfiguration.host,
                    port: logstashConfiguration.port,
                    format: logstashFormat,
                });
            } else {
                logstashTransport = new LogstashTransport({
                    host: logstashConfiguration.host,
                    port: logstashConfiguration.port,
                    protocol: logstashConfiguration.protocol,
                    format: logstashFormat,
                });
            }
            logger.add(logstashTransport);
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

    if (loggerConfiguration.customTransports) {
        loggerConfiguration.customTransports.forEach((customTransport) => {
            logger.add(customTransport);
        });
    }

    return logger;
};
