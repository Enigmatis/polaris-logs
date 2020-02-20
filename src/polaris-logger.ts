import { ApplicationProperties } from '@enigmatis/polaris-common';
import { AbstractPolarisLogger } from './abstract-polaris-logger';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { PolarisLogProperties } from './polaris-log-properties';

export class PolarisLogger extends AbstractPolarisLogger {
    public constructor(
        loggerConfiguration: LoggerConfiguration,
        applicationLogProperties?: ApplicationProperties,
    ) {
        super(loggerConfiguration, applicationLogProperties);
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
}
