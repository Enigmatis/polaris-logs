import { CentralPoint } from './central-point';
import { SecondaryId } from './secondary-id';
import { OperationalData } from './operational-data';
import { CriticalField } from './critical-field';

export interface SubEntity {
    id: string;
    name?: string;
    secondaryIds?: SecondaryId[];
    operationalData?: OperationalData[];
    criticalFields?: CriticalField[];
    centralPoint?: CentralPoint;
}
