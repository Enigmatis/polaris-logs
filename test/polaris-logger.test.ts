import { v4 as uuidv4 } from 'uuid';
import { LoggerConfiguration } from '../src/configurations/logger-configuration';
import { Action } from '../src/entities/group-id';
import { Logger } from '../src/logger-with-custom-levels';
import { ApplicationProperties, LoggerLevel } from '../src/main';
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
    const appProps: ApplicationProperties = {
        id: 'p0laris-l0gs',
        name: 'polaris-logs',
        version: 'v1',
        environment: 'environment',
        component: 'component',
    };
    const config: LoggerConfiguration = {
        loggerLevel: LoggerLevel.INFO,
    };
    const message = 'log message';

    test('creating a polaris logger with application properties and configuration - winston createLogger was called with configuration', () => {
        new PolarisLogger(config, appProps);

        expect(createLogger).toHaveBeenCalledWith(config);
    });

    test('fatal - logging message - message is in the log', () => {
        const logger = new PolarisLogger(config);
        logger.fatal(message);
        expect(loggerImplMock.fatal).toHaveBeenCalledWith({
            message,
            recordId: expect.anything(),
        });
    });

    test('fatal - logging message & messagId - message & messageId are in the log', () => {
        const logger = new PolarisLogger(config);
        const recordId = uuidv4();
        logger.fatal(message, { recordId });
        expect(loggerImplMock.fatal).toHaveBeenCalledWith({
            message,
            recordId,
        });
    });

    test('error - logging message - message is in the log', () => {
        const logger = new PolarisLogger(config);
        logger.error(message);
        expect(loggerImplMock.error).toHaveBeenCalledWith({
            message,
            recordId: expect.anything(),
        });
    });

    test('warn - logging message - message is in the log', () => {
        const logger = new PolarisLogger(config);
        logger.warn(message);
        expect(loggerImplMock.warn).toHaveBeenCalledWith({
            message,
            recordId: expect.anything(),
        });
    });

    test('info - logging message - message is in the log', () => {
        const logger = new PolarisLogger(config);
        logger.info(message);
        expect(loggerImplMock.info).toHaveBeenCalledWith({
            message,
            recordId: expect.anything(),
        });
    });

    test('debug - logging message - message is in the log', () => {
        const logger = new PolarisLogger(config);
        logger.debug(message);
        expect(loggerImplMock.debug).toHaveBeenCalledWith({
            message,
            recordId: expect.anything(),
        });
    });

    test('trace - logging message - message is in the log', () => {
        const logger = new PolarisLogger(config);
        logger.trace(message);
        expect(loggerImplMock.trace).toHaveBeenCalledWith({
            message,
            recordId: expect.anything(),
        });
    });

    test('info - logging message - application properties are in the log', () => {
        const logger = new PolarisLogger(config, appProps);
        logger.info(message);
        expect(loggerImplMock.info).toHaveBeenCalledWith(
            expect.objectContaining({
                component: appProps.component,
                environment: appProps.environment,
                version: appProps.version,
                eventKindDescription: { systemId: appProps.id },
                systemId: appProps.id,
                systemName: appProps.name,
                recordId: expect.anything(),
            }),
        );
    });

    test('info - logging message - with custom properties', () => {
        const logger = new PolarisLogger(config, appProps);
        logger.info(message, {
            customProperties: { arik: 'Hamelech' },
        });

        const args = loggerImplMock.info.mock.calls[0][0]; // get the first call to your method
        expect(args).toEqual({
            arik: 'Hamelech',
            component: appProps.component,
            environment: appProps.environment,
            version: appProps.version,
            eventKindDescription: { systemId: appProps.id },
            systemId: appProps.id,
            systemName: appProps.name,
            message,
            recordId: expect.anything(),
        });
    });

    test('info - logging message with entity in options - entity is in the log', () => {
        const logger = new PolarisLogger(config, appProps);
        logger.info(message, {
            entity: {
                id: '0',
            },
        });
        expect(loggerImplMock.info).toHaveBeenCalledWith(
            expect.objectContaining({
                message,
                recordId: expect.anything(),
                entity: {
                    id: '0',
                },
            }),
        );
    });

    test('info - logging message with entities in options - entities is in the log', () => {
        const logger = new PolarisLogger(config, appProps);
        logger.info(message, {
            entities: [{ id: '0' }, { id: '1' }, { id: '2' }],
        });
        expect(loggerImplMock.info).toHaveBeenCalledWith(
            expect.objectContaining({
                message,
                recordId: expect.anything(),
                entities: [{ id: '0' }, { id: '1' }, { id: '2' }],
            }),
        );
    });

    test('info - logging message with entity and entities in options - entities is in the log', () => {
        const logger = new PolarisLogger(config, appProps);
        logger.info(message, {
            entity: { id: '2' },
            entities: [{ id: '0' }, { id: '1' }],
        });
        expect(loggerImplMock.info).toHaveBeenCalledWith(
            expect.objectContaining({
                message,
                recordId: expect.anything(),
                entities: [{ id: '0' }, { id: '1' }, { id: '2' }],
            }),
        );
    });

    test('info - logging message with groupId - groupId is in the log', () => {
        const logger = new PolarisLogger(config, appProps);
        logger.info(message, {
            groupId: { id: '0', action: Action.SPLIT },
        });
        expect(loggerImplMock.info).toHaveBeenCalledWith(
            expect.objectContaining({
                message,
                recordId: expect.anything(),
                groupId: { id: '0', action: Action.SPLIT },
            }),
        );
    });
});
