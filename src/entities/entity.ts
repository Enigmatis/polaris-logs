import { CentralPoint } from './central-point';
import { Identifiable } from './identifiable';
import { SubEntity } from './sub-entity';
import { JsonObject } from './json-object';

export interface Entity {
    id: string;
    name?: string;
    secondaryIds?: JsonObject;
    operationalData?: JsonObject;
    correlationIds?: Identifiable[];
    subEntities?: SubEntity[];
    criticalFields?: JsonObject;
    centralPoint?: CentralPoint;
}
