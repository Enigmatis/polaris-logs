import { CentralPoint } from './central-point';
import { JsonObject } from './json-object';

export interface SubEntity {
    id: string;
    name?: string;
    secondaryIds?: JsonObject;
    operationalData?: JsonObject;
    criticalFields?: JsonObject;
    centralPoint?: CentralPoint;
}
