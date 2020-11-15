import { Entity, EventKindDescription, Reality, Request } from './entities';
import { GroupId } from './entities';

export interface PolarisLogProperties {
    throwable?: any;
    elapsedTime?: number;
    logId?: string;
    customProperties?: any;
    response?: any;
    messageId?: string;
    recordId?: string;
    eventKind?: string;
    eventKindDescription?: EventKindDescription;
    reality?: Reality;
    request?: Request;
    entity?: Entity;
    entities?: Entity[];
    upn?: string;
    ip?: string;
    host?: string;
    groupId?: GroupId;
}
