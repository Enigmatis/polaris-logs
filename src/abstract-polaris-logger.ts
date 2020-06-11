import cleanDeep = require('clean-deep');
const uuidv1 = require('uuid/v1');
import { ApplicationProperties } from '@enigmatis/polaris-common';
import * as apolloTypes from 'apollo-server-types';
import * as serializeError from 'serialize-error';
import { Logger } from 'winston';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { PolarisLogProperties } from './polaris-log-properties';
import { createLogger } from './winston-logger';
type apolloLogger = apolloTypes.Logger & {
    fatal(message: string, ...args: any[]): void;
    trace(message: string, ...args: any[]): void;
};
export abstract class AbstractPolarisLogger implements apolloLogger {
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

    protected buildLog(message: string, polarisLogProperties?: PolarisLogProperties) {
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
