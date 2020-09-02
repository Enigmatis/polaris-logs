import { Entity, EventKindDescription, Reality, Request } from './entities';

export interface PolarisLogProperties {
    throwable?: any;
    elapsedTime?: number;
    logId?: string;
    customProperties?: any;
    response?: any;
    recordId?: string;
    eventKind?: string;
    eventKindDescription?: EventKindDescription;
    reality?: Reality;
    request?: Request;
    entity?: Entity;
    entities?: [Entity];
    upn?: string;
    ip?: string;
    host?: string;
}
