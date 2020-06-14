import { Entity, EventKindDescription, Reality, Request } from './entities';

export interface PolarisLogProperties {
    throwable?: any;
    elapsedTime?: number;
    logId?: string;
    customProperties?: any;
    response?: any;
    messageId?: string;
    eventKind?: string;
    eventKindDescription?: EventKindDescription;
    reality?: Reality;
    request?: Request;
    entity?: Entity;
    upn?: string;
    ip?: string;
    host?: string;
}
