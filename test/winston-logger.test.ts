import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LoggerConfiguration } from '../src/configurations/logger-configuration';
import { LoggerLevel } from '../src/configurations/logger-level';
import { LogstashProtocol } from '../src/configurations/logstash-protocol';
import * as winstonLogger from '../src/winston-logger';
import { LogstashTransport } from 'winston-logstash-ts';

jest.mock('winston', () => {
    return {
        format: {
            timestamp: jest.fn(),
            align: jest.fn(),
            printf: jest.fn(),
            combine: jest.fn(),
            json: jest.fn(),
            colorize: jest.fn(),
        },
        createLogger: jest.fn(() => ({
            add: jest.fn(),
            on: jest.fn(),
        })),
        addColors: jest.fn(),
        transports: {
            File: jest.fn(),
            Console: jest.fn(),
        },
    };
});

jest.mock('winston-daily-rotate-file', () => {
    return jest.fn().mockImplementation(() => ({
        DailyRotateFile: jest.fn(),
    }));
});
jest.mock('winston3-logstash-transport', () => jest.fn());

jest.mock('winston-logstash-ts');

describe('winston-logger tests', () => {
    const loggerLevel = LoggerLevel.INFO;
    const logstashHost = 'test';
    const logstashPort = 8080;
    const logstashProtocol: LogstashProtocol = LogstashProtocol.UDP;
    const filePath = './temp/file-test.txt';
    const directoryPath = './temp/';
    const fileNamePrefix = 'rotate-file-test';
    const fileExtension = 'txt';
    const numberOfDaysToDeleteFile = 55;

    test('creating logger with basic configuration', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
        };

        winstonLogger.createLogger(config);

        expect(winston.createLogger).toHaveBeenCalledWith(
            expect.objectContaining({
                level: loggerLevel,
                levels: {
                    debug: 4,
                    error: 1,
                    fatal: 0,
                    info: 3,
                    trace: 5,
                    warn: 2,
                },
                exitOnError: false,
            }),
        );
    });

    test('creating logger with configuration of single logstash service', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashConfigurations: [
                {
                    host: logstashHost,
                    port: logstashPort,
                    protocol: logstashProtocol,
                },
            ],
        };

        winstonLogger.createLogger(config);

        expect(LogstashTransport).toHaveBeenCalledWith({
            host: logstashHost,
            port: logstashPort,
            protocol: logstashProtocol,
        });
    });

    test('creating logger with configuration of multiple logstash services', () => {
        const anotherLogstashHost = 'wow';
        const anotherLogstashPort = 5050;
        const anotherLogstashProtocol: LogstashProtocol = LogstashProtocol.TCP;

        const config: LoggerConfiguration = {
            loggerLevel,
            logstashConfigurations: [
                {
                    host: logstashHost,
                    port: logstashPort,
                    protocol: logstashProtocol,
                },
                {
                    host: anotherLogstashHost,
                    port: anotherLogstashPort,
                    protocol: anotherLogstashProtocol,
                },
            ],
        };

        winstonLogger.createLogger(config);

        expect(LogstashTransport).toHaveBeenCalledWith({
            host: logstashHost,
            port: logstashPort,
            protocol: logstashProtocol,
        });
        expect(LogstashTransport).toHaveBeenCalledWith({
            host: anotherLogstashHost,
            port: anotherLogstashPort,
            protocol: anotherLogstashProtocol,
        });
    });

    test('creating logger with configuration of dynamic logstash service', () => {
        const anotherLogstashProtocol: LogstashProtocol = LogstashProtocol.DYNAMIC;
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashConfigurations: [
                {
                    host: logstashHost,
                    port: logstashPort,
                    protocol: anotherLogstashProtocol,
                },
            ],
        };

        winstonLogger.createLogger(config);

        expect(LogstashTransport).toHaveBeenCalledWith({
            host: logstashHost,
            port: logstashPort,
        });
    });

    test('creating logger with configuration for console writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            writeToConsole: true,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
    });

    test('creating logger with configuration of file writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logFilePath: filePath,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.File).toHaveBeenCalledWith(
            expect.objectContaining({
                filename: filePath,
            }),
        );
    });

    test('creating logger with configuration of rotate file writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            dailyRotateFileConfiguration: {
                directoryPath,
                fileNamePrefix,
                fileExtension,
                numberOfDaysToDeleteFile,
            },
        };

        winstonLogger.createLogger(config);

        expect(DailyRotateFile).toHaveBeenCalledWith(
            expect.objectContaining({
                datePattern: 'DD-MM-YYYY',
                filename: `${directoryPath}${fileNamePrefix}-%DATE%.${fileExtension}`,
                maxFiles: `${numberOfDaysToDeleteFile}d`,
            }),
        );
    });

    test('creating logger with configuration of default days for rotate file writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            dailyRotateFileConfiguration: {
                directoryPath,
                fileNamePrefix,
                fileExtension,
            },
        };

        winstonLogger.createLogger(config);

        expect(DailyRotateFile).toHaveBeenCalledWith(
            expect.objectContaining({
                maxFiles: '30d',
            }),
        );
    });

    test('creating logger with configuration of console and file writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            writeToConsole: true,
            logFilePath: filePath,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
        expect(winston.transports.File).toHaveBeenCalled();
    });

    test('creating logger with configuration of console and rotate file writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            writeToConsole: true,
            dailyRotateFileConfiguration: {
                directoryPath,
                fileNamePrefix,
                fileExtension,
            },
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
        expect(DailyRotateFile).toHaveBeenCalled();
    });

    test('creating logger with configuration of file and rotate file', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logFilePath: filePath,
            dailyRotateFileConfiguration: {
                directoryPath,
                fileNamePrefix,
                fileExtension,
            },
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.File).not.toHaveBeenCalled();
        expect(DailyRotateFile).toHaveBeenCalled();
    });

    test('creating logger with configuration of console and file and rotate file writing', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            writeToConsole: true,
            logFilePath: filePath,
            dailyRotateFileConfiguration: {
                directoryPath,
                fileNamePrefix,
                fileExtension,
            },
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
        expect(winston.transports.File).not.toHaveBeenCalled();
        expect(DailyRotateFile).toHaveBeenCalled();
    });
});
