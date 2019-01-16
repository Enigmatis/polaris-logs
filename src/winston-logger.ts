import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LogstashTransport } from 'winston-logstash-transport';
import { LoggerConfiguration } from './logger-configuration';
import { appendSuffixToFilePath } from './utils/path-util';

const consoleFullFormat = winston.format.combine(
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

const consoleShortFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.align(),
    winston.format.printf(info => {
        const { timestamp, level, message } = info;
        const ts = timestamp.slice(0, 19).replace('T', ' ');
        return `${ts} [${level}]: ${message}`;
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
                format: winston.format.combine(
                    winston.format.colorize(),
                    loggerConfiguration.writeFullMessageToConsole
                        ? consoleFullFormat
                        : consoleShortFormat,
                ),
            }),
        );
    }

    if (loggerConfiguration.logFilePath) {
        if (loggerConfiguration.dailyLogFile) {
            logger.add(
                new DailyRotateFile({
                    format: logstashFormat,
                    filename: appendSuffixToFilePath(loggerConfiguration.logFilePath, '-%DATE%'),
                    datePattern: 'YYYY-MM-DD',
                }),
            );
        } else {
            logger.add(
                new winston.transports.File({
                    format: logstashFormat,
                    filename: loggerConfiguration.logFilePath,
                }),
            );
        }
    }

    return logger;
};
