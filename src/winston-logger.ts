import { LogstashTransport } from 'winston-logstash-transport';
import { LoggerConfiguration } from './logger-configuration';
import * as winston from 'winston';

const consoleFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => {
        const { timestamp, level, message, ...args } = info;

        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message}\n${
            Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
            }`;
    }),
);

const logstashFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => {
        return JSON.stringify(info, null, 2);
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
        fatal: 'bold',
        error: 'red',
        warn: 'yellow',
        info: 'green',
        trace: 'magenta',
        debug: 'blue',
    },
};

export const createLogger = (loggerConfiguration: LoggerConfiguration) => {
    const logger = winston.createLogger({
        level: loggerConfiguration.loggerLevel,
        levels: customLevels.levels,
        format: winston.format.json(),
        transports: [
            new LogstashTransport({
                host: loggerConfiguration.logstashHost,
                port: loggerConfiguration.logstashPort,
                format: logstashFormat,
            }),
        ],
        exitOnError: false, // do not exit on handled exceptions
    });

    winston.addColors(customLevels.colors);
    if (loggerConfiguration.writeToConsole) {
        logger.add(
            new winston.transports.Console({
                format: winston.format.combine(winston.format.colorize(), consoleFormat),
            }),
        );
    }
    return logger;
};
