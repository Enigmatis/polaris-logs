import {WinstonLogger as Logger} from "./WinstonLogger";
import {LogPropertiesWrapper} from "./LogPropertiesWrapper"
import {PolarisLogProperties} from "./PolarisLogProperties";
import {ParserUtil} from "./utils/ParserUtil";
import cleanDeep = require("clean-deep");
import winston = require("winston");

export class PolarisLogger {
    private logger;
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
    trace(polarisLogProperties: PolarisLogProperties) {
        // if is info enabled
        this.logger.trace(this.buildLog(polarisLogProperties));
    }
    debug(polarisLogProperties: PolarisLogProperties) {
        // if is info enabled
        this.logger.debug(this.buildLog(polarisLogProperties));
    }

    buildLog(polarisLogProperties: PolarisLogProperties) {
        if (this.logPropertiesWrapper != null) {
            polarisLogProperties = this.logPropertiesWrapper.wrapLogProperties(polarisLogProperties);
        }

        let propertiesAsObject = ParserUtil.parseClassToObject(polarisLogProperties);
        return cleanDeep(propertiesAsObject);
    }
}
