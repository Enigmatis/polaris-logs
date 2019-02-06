import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { LogstashTransport } from 'winston-logstash-transport';
import { LoggerConfiguration } from '../src';
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

    test('createLogger_basicConfiguration_createsTheLoggerWithBasicConfiguration', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
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

        expect(LogstashTransport).toHaveBeenCalledWith(
            expect.objectContaining({
                host: logstashHost,
                port: logstashPort,
            }),
        );
    });

    test('createLogger_configurationWithConsoleWriting_consoleTransportHaveBeenCalled', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
            writeToConsole: true,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
    });

    test('createLogger_configurationWithFileWriting_fileTransportHaveBeenCalledWithConfiguration', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
            logFilePath: filePath,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.File).toHaveBeenCalledWith(
            expect.objectContaining({
                filename: filePath,
            }),
        );
    });

    test('createLogger_configurationWithRotateFileWriting_rotateFileTransportHaveBeenCalledWithConfiguration', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
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

    test('createLogger_configurationWithDefaultDaysForRotateFileWriting_rotateFileTransportHaveBeenCalledWithDefaultDays', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
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

    test('createLogger_configurationWithConsoleAndFileWriting_bothConsoleAndFileTransportHaveBeenCalled', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
            writeToConsole: true,
            logFilePath: filePath,
        };

        winstonLogger.createLogger(config);

        expect(winston.transports.Console).toHaveBeenCalled();
        expect(winston.transports.File).toHaveBeenCalled();
    });

    test('createLogger_configurationWithConsoleAndRotateFileWriting_bothConsoleAndRotateFileTransportHaveBeenCalled', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
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

    test('createLogger_configurationWithFileAndRotateFile_onlyRotateFileTransportHaveBeenCalled', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
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

    test('createLogger_configurationWithConsoleAndFileAndRotateFileWriting_onlyConsoleAndRotateFileTransportHaveBeenCalled', () => {
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashHost,
            logstashPort,
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
