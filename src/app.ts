import {PolarisLogger} from "./PolarisLogger";
import {PolarisLogProperties} from "./PolarisLogProperties";


let polarisLogger = new PolarisLogger();
polarisLogger.debug(new PolarisLogProperties("hello world"));