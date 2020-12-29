import { CentralPoint } from './central-point';
import { Identifiable } from './identifiable';
import { SubEntity } from './sub-entity';

export interface Entity {
    id: string;
    name?: string;
    secondaryIds?: Record<string, any>;
    operationalData?: Record<string, any>;
    correlationIds?: Identifiable[];
    subEntities?: SubEntity[];
    criticalFields?: Record<string, any>;
    centralPoint?: CentralPoint;
}
