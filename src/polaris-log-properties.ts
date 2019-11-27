import {
    Entity,
    EventKindDescriptionLogProperty,
    RealityLogProperty,
    RequestLogProperty,
} from './entities';

export interface PolarisLogProperties {
    throwable?: object;
    elapsedTime?: number;
    logId?: string;
    customProperties?: object;
    requestId?: string;
    response?: object;
    recordId?: string;
    eventKind?: string;
    eventKindDescription?: EventKindDescriptionLogProperty;
    reality?: RealityLogProperty;
    request?: RequestLogProperty;
    entity?: Entity;
    entities?: Entity[];
}
