import { Identifiable } from './Identifiable';
import { KeyValuePair } from './KeyValuePair';
import { Reality } from './reality';
import { SubEntity } from './sub-entity';

export interface Entity {
    id?: string;
    reality?: Reality;
    name?: string;
    secondaryIds?: Array<KeyValuePair<string, any>>;
    operationalData?:  Array<KeyValuePair<string, any>>;
    correlationIds?: Identifiable[];
    subEntities?: SubEntity[];
}
