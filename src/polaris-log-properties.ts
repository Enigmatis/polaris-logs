import { EventKindDescriptionLogProperty } from './entities/event-kind-description-log-property';
import { RealityLogProperty } from './entities/reality-log-property';
import { RequestLogProperty } from './entities/request-log-property';
import { SystemLogProperty } from './entities/system-log-property';

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
