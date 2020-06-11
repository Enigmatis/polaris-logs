const cleanDeep = require('clean-deep');
import { ApplicationProperties } from '@enigmatis/polaris-common';
import { serializeError } from 'serialize-error';
import { v4 as uuidv4 } from 'uuid';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { Logger } from './logger-with-custom-levels';
import { PolarisLogProperties } from './polaris-log-properties';
import { createLogger } from './winston-logger';

export abstract class AbstractPolarisLogger {
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

    protected logger: Logger;

    protected constructor(
        loggerConfiguration: LoggerConfiguration,
        readonly applicationLogProperties?: ApplicationProperties,
    ) {
        this.logger = createLogger(loggerConfiguration);
    }

    public abstract fatal(message: string, ...args: any[]): void;

    public abstract error(message: string, ...args: any[]): void;

    public abstract warn(message: string, ...args: any[]): void;

    public abstract info(message: string, ...args: any[]): void;

    public abstract debug(message: string, ...args: any[]): void;

    public abstract trace(message: string, ...args: any[]): void;

    protected buildLog(message: string, polarisLogProperties?: PolarisLogProperties): any {
        const eventKindDescription =
            this.applicationLogProperties?.id || polarisLogProperties?.request?.requestingSystem?.id
                ? {
                      systemId: this.applicationLogProperties?.id,
                      requestingSystemId: polarisLogProperties?.request?.requestingSystem?.id,
                  }
                : undefined;
        const messageId = polarisLogProperties?.messageId || uuidv4();

        const propertiesWithCustom = {
            message,
            ...polarisLogProperties?.customProperties,
            ...polarisLogProperties,
            customProperties: undefined, // in order for it to be removed, so it won't be a duplicate
            ...AbstractPolarisLogger.getAppPropertiesToAssign(this.applicationLogProperties),
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
