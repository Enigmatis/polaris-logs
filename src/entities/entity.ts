import { Identifiable } from './Identifiable';
import { Reality } from './reality';
import { SubEntity } from './sub-entity';

export interface Entity {
    id?: string;
    reality?: Reality;
    name?: string;
    secondaryIds?: Map<string, any>;
    operationalData?: Map<string, any>;
    correlationIds?: Identifiable[];
    subEntities?: SubEntity[];
}
