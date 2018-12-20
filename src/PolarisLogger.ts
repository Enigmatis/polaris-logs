import {WinstonLogger} from "./WinstonLogger";
import {LogPropertiesWrapper} from "./LogPropertiesWrapper"
import {PolarisLogProperties} from "./PolarisLogProperties";
import {ParserUtil} from "./utils/ParserUtil";
import {ApplicationLogProperties} from "./entities/ApplicationLogProperties";

export class PolarisLogger {
    private logger;
    private readonly logPropertiesWrapper: LogPropertiesWrapper;
    private readonly applicationLogProperties: ApplicationLogProperties;

    public constructor(logPropertiesWrapper: LogPropertiesWrapper, applicationProperties: ApplicationLogProperties,
                       loggerLevel: string, logstashHost: string, logstashPort: number) {
        this.logger = new WinstonLogger(loggerLevel, logstashHost, logstashPort).getLogger();
        this.logPropertiesWrapper = logPropertiesWrapper;
        this.applicationLogProperties = applicationProperties;
    }

    public fatal(polarisLogProperties: PolarisLogProperties) {
        if (this.logger.isFatalEnabled()) {
            this.logger.fatal(this.buildLog(polarisLogProperties));
        }
    }

    public error(polarisLogProperties: PolarisLogProperties) {
        if (this.logger.isErrorEnabled()) {
            this.logger.error(this.buildLog(polarisLogProperties));
        }
    }

    public warn(polarisLogProperties: PolarisLogProperties) {
        if (this.logger.isWarnEnabled()) {
            this.logger.warn(this.buildLog(polarisLogProperties));
        }
    }

    public info(polarisLogProperties: PolarisLogProperties) {
        if (this.logger.isInfoEnabled()) {
            this.logger.info(this.buildLog(polarisLogProperties));
        }
    }

    public trace(polarisLogProperties: PolarisLogProperties) {
        if (this.logger.isTraceEnabled()) {
            this.logger.trace(this.buildLog(polarisLogProperties));
        }
    }

    public debug(polarisLogProperties: PolarisLogProperties) {
        if (this.logger.isDebugEnabled()) {
            this.logger.debug(this.buildLog(polarisLogProperties));
        }
    }

    private shouldLogRequestAndResponse(logRequestAndResponse: boolean) {
        this.logPropertiesWrapper.shouldLogRequestAndResponse(logRequestAndResponse);
    }

    private buildLog(polarisLogProperties: PolarisLogProperties) {
        if (this.logPropertiesWrapper != null) {
            polarisLogProperties = this.logPropertiesWrapper.wrapLogProperties(polarisLogProperties);
        }

        if (this.applicationLogProperties != null) {
            polarisLogProperties.setApplicationProperties(this.applicationLogProperties);
        }

        this.handleCustomProperties(polarisLogProperties);

        return ParserUtil.parseClassToCleansedObject(polarisLogProperties);
    }

    private handleCustomProperties(polarisLogProperties: object) {
        let customProperties = polarisLogProperties["customProperties"];
        if (customProperties != null) {
            Object.keys(customProperties).forEach(function (key) {
                polarisLogProperties[key] = customProperties[key];
            });
            delete polarisLogProperties["customProperties"];
        }
    }
}
