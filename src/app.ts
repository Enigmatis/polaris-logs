import { PolarisLogger } from "./PolarisLogger";
import { PolarisLogProperties } from "./PolarisLogProperties";


var polarisLogger = new PolarisLogger();
polarisLogger.debug(new PolarisLogProperties().setMessage("hi"));