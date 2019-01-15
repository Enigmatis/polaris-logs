import cleanDeep = require('clean-deep');
import {Logger} from 'winston';
import {ApplicationLogProperties} from './entities/application-log-properties';
import {LoggerConfiguration} from './logger-configuration';
import {PolarisLogProperties} from './polaris-log-properties';
import {createLogger} from './winston-logger';

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
            repositoryVersion: applicationProperties.repositoryVersion,
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
        };

        return cleanDeep(propertiesWithCustom);
    }
}
