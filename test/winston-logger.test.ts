import * as winston from 'winston';
import { LoggerConfiguration } from '../src/configurations/logger-configuration';
import { LoggerLevel } from '../src/configurations/logger-level';
import { LogstashProtocol } from '../src/configurations/logstash-protocol';
import * as winstonLogger from '../src/winston-logger';
import { LogstashTransport } from 'winston-dynamic-logstash-transport';

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

jest.mock('winston-dynamic-logstash-transport');

describe('winston-logger tests', () => {
    const loggerLevel = LoggerLevel.INFO;
    const logstashHost = 'test';
    const logstashPort = 8080;
    const logstashProtocol: LogstashProtocol = LogstashProtocol.UDP;

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
        const dynamicLogstashProtocol: LogstashProtocol = LogstashProtocol.DYNAMIC;
        const config: LoggerConfiguration = {
            loggerLevel,
            logstashConfigurations: [
                {
                    host: logstashHost,
                    port: logstashPort,
                    protocol: dynamicLogstashProtocol,
                },
            ],
        };

        winstonLogger.createLogger(config);

        expect(LogstashTransport).toHaveBeenCalledWith({
            host: logstashHost,
            port: logstashPort,
            protocol: dynamicLogstashProtocol,
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
});
