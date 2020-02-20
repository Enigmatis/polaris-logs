import { ApplicationProperties } from '@enigmatis/polaris-common';
import cleanDeep = require('clean-deep');
import * as serializeError from 'serialize-error';
import { Logger } from 'winston';
import { AbstractPolarisLogger } from './abstract-polaris-logger';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { PolarisLogProperties } from './polaris-log-properties';
import { createLogger } from './winston-logger';
const uuidv1 = require('uuid/v1');

export class PolarisLogger extends AbstractPolarisLogger {
    private static getAppPropertiesToAssign(applicationProperties?: ApplicationProperties) {
        if (applicationProperties) {
            return {
                systemId: applicationProperties.id,
                systemName: applicationProperties.name,
                version: applicationProperties.version,
                environment: applicationProperties.environment,
                component: applicationProperties.component,
            };
        }
    }

    private logger: Logger;

    public constructor(
        loggerConfiguration: LoggerConfiguration,
        readonly applicationLogProperties?: ApplicationProperties,
    ) {
        super();
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

    public debug(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.debug(this.buildLog(message, polarisLogProperties));
    }

    public trace(message: string, polarisLogProperties?: PolarisLogProperties) {
        this.logger.trace(this.buildLog(message, polarisLogProperties));
    }

    private buildLog(message: string, polarisLogProperties?: PolarisLogProperties) {
        const eventKindDescription =
            this.applicationLogProperties?.id || polarisLogProperties?.request?.requestingSystem?.id
                ? {
                      systemId: this.applicationLogProperties?.id,
                      requestingSystemId: polarisLogProperties?.request?.requestingSystem?.id,
                  }
                : undefined;
        const messageId = polarisLogProperties?.messageId || uuidv1();
        const propertiesWithCustom = {
            message,
            ...(polarisLogProperties && polarisLogProperties.customProperties),
            ...polarisLogProperties,
            ...PolarisLogger.getAppPropertiesToAssign(this.applicationLogProperties),
            eventKindDescription,
            messageId,
            throwable:
                polarisLogProperties &&
                polarisLogProperties.throwable &&
                serializeError(polarisLogProperties.throwable),
        };
        return cleanDeep(propertiesWithCustom);
    }
}
