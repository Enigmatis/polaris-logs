import { SystemLogProperty } from './system-log-property';

export interface RequestLogProperty {
    requestingIp?: string;
    requestingUserIdentifier?: string;
    requestingSystem?: SystemLogProperty;
    request?: any;
}
