import { CentralPoint } from './central-point';
import { Identifiable } from './identifiable';
import { SubEntity } from './sub-entity';
import { SecondaryId } from './secondary-id';
import { OperationalData } from './operational-data';
import { CriticalField } from './critical-field';

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
