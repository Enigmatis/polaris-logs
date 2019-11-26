import { SystemLogProperty } from './system-log-property';

export interface RequestLogProperty {
    requestingIp?: string;
    requestingUserIdentifier?: string;
    requestingSystem?: SystemLogProperty;
    requestQuery?: {
        body?: any;
        query?: any;
    };
}
