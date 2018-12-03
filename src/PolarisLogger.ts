import {WinstonLogger as Logger} from "./WinstonLogger";
import {LogPropertiesWrapper} from "./LogPropertiesWrapper"
import {PolarisLogProperties} from "./PolarisLogProperties";
import winston = require("winston");

export class PolarisLogger {
    private logger: winston.Logger;
    private readonly logPropertiesWrapper: LogPropertiesWrapper;

    constructor(logPropertiesWrapper: LogPropertiesWrapper) {
        this.logger = (new Logger()).getLogger();
        this.logPropertiesWrapper = logPropertiesWrapper;
    }

    shouldLogRequestAndResponse(logRequestAndResponse: boolean) {
        this.logPropertiesWrapper.shouldLogRequestAndResponse(logRequestAndResponse);
    }

    info(polarisLogProperties: PolarisLogProperties) {
        // if is info enabled
        this.logger.info(this.buildLog(polarisLogProperties));
    }

    warn(polarisLogProperties: PolarisLogProperties) {
        // if is info enabled
        this.logger.warn(this.buildLog(polarisLogProperties));
    }

    error(polarisLogProperties: PolarisLogProperties) {
        // if is info enabled
        this.logger.error(this.buildLog(polarisLogProperties));
    }

    debug(polarisLogProperties: PolarisLogProperties) {
        // if is info enabled
        this.logger.debug(this.buildLog(polarisLogProperties));
    }

    //trace
    buildLog(polarisLogProperties: PolarisLogProperties) {
        if (this.logPropertiesWrapper != null) {
            polarisLogProperties = this.logPropertiesWrapper.wrapLogProperties(polarisLogProperties);
        }
        // TODO: propertiesBuilder.applicationProperties()

        return polarisLogProperties;
        // return JSON.stringify(polarisLogProperties);
    }
}
