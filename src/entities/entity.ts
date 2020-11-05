import { CentralPoint } from './central-point';
import { Identifiable } from './identifiable';
import { KeyValuePair } from './key-value-pair';
import { Reality } from './reality';
import { SubEntity } from './sub-entity';

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
}
