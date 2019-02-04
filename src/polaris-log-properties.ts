import {
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
    upn?: string;
    response?: object;
    isTraceable?: boolean;
    recordId?: string;
    eventKind?: string;
    eventKindDescription?: EventKindDescriptionLogProperty;
    reality?: RealityLogProperty;
    request?: RequestLogProperty;
}
