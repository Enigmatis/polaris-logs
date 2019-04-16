import cleanDeep = require('clean-deep');
import * as serializeError from 'serialize-error';
import { Logger } from 'winston';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { ApplicationLogProperties } from './entities';
import { PolarisLogProperties } from './polaris-log-properties';
import { createLogger } from './winston-logger';

export class PolarisLogger {
    private static getAppPropertiesToAssign(applicationProperties: ApplicationLogProperties) {
        return {
            system: {
                id: applicationProperties.id,
                name: applicationProperties.name,
            },
            eventKindDescription: {
                systemId: applicationProperties.id,
            },
            version: applicationProperties.version,
            environment: applicationProperties.environment,
            component: applicationProperties.component,
        };
    }

    private logger: Logger;

    public constructor(
        readonly applicationLogProperties: ApplicationLogProperties,
        loggerConfiguration: LoggerConfiguration,
    ) {
        this.logger = createLogger(loggerConfiguration);
    }

    public fatal(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.fatal(this.buildLog(message, polarisLogProperties));
    }

    public error(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.error(this.buildLog(message, polarisLogProperties));
    }

    public warn(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.warn(this.buildLog(message, polarisLogProperties));
    }

    public info(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.info(this.buildLog(message, polarisLogProperties));
    }

    public trace(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.trace(this.buildLog(message, polarisLogProperties));
    }

    public debug(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.debug(this.buildLog(message, polarisLogProperties));
    }

    private buildLog(message: string, polarisLogProperties?: PolarisLogProperties) {
        const propertiesWithCustom = {
            message,
            ...(polarisLogProperties && polarisLogProperties.customProperties),
            ...polarisLogProperties,
            ...PolarisLogger.getAppPropertiesToAssign(this.applicationLogProperties),
            customProperties: undefined,
            throwable:
                polarisLogProperties &&
                polarisLogProperties.throwable &&
                serializeError(polarisLogProperties.throwable),
        };
        return cleanDeep(propertiesWithCustom);
    }
}
