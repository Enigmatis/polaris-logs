import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LogstashTransport } from 'winston-logstash-transport';
import { LoggerConfiguration } from '../src/configurations/logger-configuration';
import * as winstonLogger from '../src/winston-logger';

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
jest.mock('winston-logstash-transport', () => {
    return { LogstashTransport: jest.fn() };
});

describe('winston-logger tests', () => {
    const loggerLevel: string = 'info';
    const logstashHost: string = 'test';
    const logstashPort: number = 8080;
    const filePath: string = './temp/file-test.txt';
    const directoryPath: string = './temp/';
    const fileNamePrefix: string = 'rotate-file-test';
    const fileExtension: string = 'txt';
    const numberOfDaysToDeleteFile: number = 55;

    test('createLogger - basic configuration - creates the logger with basic configuration', () => {
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

    test('createLogger - configuration with single logstash - logstash transport have been called with configured properties', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashConfigurations: [
                {
                    logstashHost,
                    logstashPort,
                },
            ],
        };

        winstonLogger.createLogger(config);

        expect(LogstashTransport).toHaveBeenCalledTimes(1);
        expect(LogstashTransport).toHaveBeenCalledWith(
            expect.objectContaining({
                host: logstashHost,
                port: logstashPort,
            }),
        );
    });

    test('createLogger - configuration with multiple logstash - logstash transport have been called with configured properties', () => {
        const anotherLogstashHost: string = 'wow';
        const anotherLogstashPort: number = 5050;

        const config: LoggerConfiguration = {
            loggerLevel,
            logstashConfigurations: [
                {
                    logstashHost,
                    logstashPort,
                },
                {
                    logstashHost: anotherLogstashHost,
                    logstashPort: anotherLogstashPort,
                },
            ],
        };

        winstonLogger.createLogger(config);

        expect(LogstashTransport).toHaveBeenCalledTimes(2);
        expect(LogstashTransport).toHaveBeenNthCalledWith(
            1,
            expect.objectContaining({
                host: logstashHost,
                port: logstashPort,
            }),
        );
        expect(LogstashTransport).toHaveBeenNthCalledWith(
            2,
            expect.objectContaining({
                host: anotherLogstashHost,
                port: anotherLogstashPort,
            }),
        );
    });

    test('createLogger - configuration with console writing - console transport have been called', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            writeToConsole: true,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
    });

    test('createLogger - configuration with file writing - file transport have been called with configured properties', () => {
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

    test('createLogger - configuration with rotate file writing - rotate file transport have been called with configured properties', () => {
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
                filename: `${directoryPath}${fileNamePrefix}${'-%DATE%'}.${fileExtension}`,
                maxFiles: `${numberOfDaysToDeleteFile}d`,
            }),
        );
    });

    test('createLogger - configuration with default days for rotate file writing - rotate file transport have been called with default days', () => {
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

    test('createLogger - configuration with console and file writing - both console and file transports have been called', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            writeToConsole: true,
            logFilePath: filePath,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
        expect(winston.transports.File).toHaveBeenCalled();
    });

    test('createLogger - configuration with console and rotate file writing - both console and rotate file transports have been called', () => {
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

    test('createLogger - configuration with file and rotate file - only rotate file transport have been called', () => {
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

    test('createLogger - configuration with console and file and rotate file writing - only console and rotate file transports have been called', () => {
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
