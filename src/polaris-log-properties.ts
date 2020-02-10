import { Entity } from './entities/entity';
import { EventKindDescription } from './entities/event-kind-description';
import { Reality } from './entities/reality';
import { Request } from './entities/request';

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
