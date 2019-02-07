import { Logger } from 'winston';
import { LoggerConfiguration } from '../src/configurations/logger-configuration';
import { ApplicationLogProperties } from '../src/entities';
import { PolarisLogger } from '../src/polaris-logger';
import { createLogger } from '../src/winston-logger';

const loggerImplMock: { [T in keyof Logger]: any } = {
    fatal: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
    trace: jest.fn(),
} as any;
jest.mock('../src/winston-logger', () => {
    return {
        createLogger: jest.fn(() => {
            return loggerImplMock;
        }),
    };
});

describe('polaris-logger tests', () => {
    const appProps: ApplicationLogProperties = {
        id: 'p0laris-l0gs',
        name: 'polaris-logs',
        repositoryVersion: 'v1',
        environment: 'environment',
        component: 'component',
    };
    const config: LoggerConfiguration = {
        loggerLevel: 'info',
        logstashHost: '127.0.0.1',
        logstashPort: 8080,
    };
    const message: string = 'log message';

    test('creating a polaris logger with application properties and configuration - winston createLogger was called with configuration', () => {
        const logger = new PolarisLogger(appProps, config);

        expect(createLogger).toHaveBeenCalledWith(config);
    });

    test('fatal - logging message - message and application properties are in the log', () => {
        const logger = new PolarisLogger(appProps, config);
        logger.fatal(message);
        expect(loggerImplMock.fatal).toHaveBeenCalledWith({
            message,
            component: appProps.component,
            environment: appProps.environment,
            repositoryVersion: appProps.repositoryVersion,
            eventKindDescription: { systemId: appProps.id },
            system: { id: appProps.id, name: appProps.name },
        });
    });

    test('error - logging message - message and application properties are in the log', () => {
        const logger = new PolarisLogger(appProps, config);
        logger.error(message);
        expect(loggerImplMock.error).toHaveBeenCalledWith({
            message,
            component: appProps.component,
            environment: appProps.environment,
            repositoryVersion: appProps.repositoryVersion,
            eventKindDescription: { systemId: appProps.id },
            system: { id: appProps.id, name: appProps.name },
        });
    });

    test('warn - logging message - message and application properties are in the log', () => {
        const logger = new PolarisLogger(appProps, config);
        logger.warn(message);
        expect(loggerImplMock.warn).toHaveBeenCalledWith({
            message,
            component: appProps.component,
            environment: appProps.environment,
            repositoryVersion: appProps.repositoryVersion,
            eventKindDescription: { systemId: appProps.id },
            system: { id: appProps.id, name: appProps.name },
        });
    });

    test('info - logging message - message and application properties are in the log', () => {
        const logger = new PolarisLogger(appProps, config);
        logger.info(message);
        expect(loggerImplMock.info).toHaveBeenCalledWith({
            message,
            component: appProps.component,
            environment: appProps.environment,
            repositoryVersion: appProps.repositoryVersion,
            eventKindDescription: { systemId: appProps.id },
            system: { id: appProps.id, name: appProps.name },
        });
    });

    test('debug - logging message - message and application properties are in the log', () => {
        const logger = new PolarisLogger(appProps, config);
        logger.debug(message);
        expect(loggerImplMock.debug).toHaveBeenCalledWith({
            message,
            component: appProps.component,
            environment: appProps.environment,
            repositoryVersion: appProps.repositoryVersion,
            eventKindDescription: { systemId: appProps.id },
            system: { id: appProps.id, name: appProps.name },
        });
    });

    test('trace - logging message - message and application properties are in the log', () => {
        const logger = new PolarisLogger(appProps, config);
        logger.trace(message);
        expect(loggerImplMock.trace).toHaveBeenCalledWith({
            message,
            component: appProps.component,
            environment: appProps.environment,
            repositoryVersion: appProps.repositoryVersion,
            eventKindDescription: { systemId: appProps.id },
            system: { id: appProps.id, name: appProps.name },
        });
    });
});
