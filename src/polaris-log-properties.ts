import { Entity, EventKindDescription, Reality, Request } from './entities';

export interface PolarisLogProperties {
    throwable?: object;
    elapsedTime?: number;
    logId?: string;
    customProperties?: object;
    response?: object;
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
