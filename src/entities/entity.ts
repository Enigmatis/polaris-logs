import { CentralPoint } from './central-point';
import { Identifiable } from './identifiable';
import { SubEntity } from './sub-entity';
import { SecondaryId } from './secondary-id';
import { CriticalField } from './critical-field';
import { OperationalData } from './operational-data';

export interface Entity {
    id: string;
    name?: string;
    secondaryIds?: SecondaryId[];
    operationalData?: OperationalData[];
    correlationIds?: Identifiable[];
    subEntities?: SubEntity[];
    criticalFields?: CriticalField[];
    centralPoint?: CentralPoint;
}
