//import {winston as logger}
import {WinstonLogger as Logger} from "./WinstonLogger";
import {LogPropertiesWrapper as logPropertiesWrapper} from "./LogPropertiesWrapper"
import {PolarisLogProperties} from "./PolarisLogProperties";

export class PolarisLogger {
    private logger;

    constructor() {
        this.logger = (new Logger()).getLogger;
    }

    //shouldlogrequestandresponse
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
        if (logPropertiesWrapper != null) {
            //propertiesBuilder = logPropertiesWrapper.wrapPropertiesBuilder(propertiesBuilder);
        }
        // TODO: propertiesBuilder.applicationProperties()
        return polarisLogProperties;
        //return JsonFormatter.getAsJsonFormat(foundationLogProperties,propertiesBuilder.getPropertiesSerializer());
    }
}
