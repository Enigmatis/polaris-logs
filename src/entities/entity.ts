import { Identifiable } from './Identifiable';
import { KeyValuePair } from './KeyValuePair';
import { Reality } from './reality';
import { SubEntity } from './sub-entity';
import { CentralPoint } from './central-point';

export interface Entity {
    id?: string;
    reality?: Reality;
    name?: string;
    secondaryIds?: KeyValuePair<string, any>[];
    operationalData?: KeyValuePair<string, any>[];
    correlationIds?: Identifiable[];
    subEntities?: SubEntity[];
    criticalFields?: KeyValuePair<string, any>[];
    centralPoint?: CentralPoint;
    isClassified?: boolean;
}
