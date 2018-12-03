import {PolarisLogProperties} from "./PolarisLogProperties";

export interface LogPropertiesWrapper {
    wrapLogProperties: (PolarisLogProperties) => PolarisLogProperties,
    shouldLogRequestAndResponse: (boolean) => void
}
