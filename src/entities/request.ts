import { RequestingSystem } from './requesting-system';

export interface Request {
    requestingIp?: string;
    requestingUserIdentifier?: string;
    requestingSystem?: RequestingSystem;
    requestQuery?: any;
    requestingHost?: string;
}
