import { CentralPoint } from './central-point';
import { KeyValuePair } from './key-value-pair';

export interface SubEntity {
    id: string;
    name?: string;
    secondaryIds?: KeyValuePair<string, any>[];
    operationalData?: KeyValuePair<string, any>[];
    criticalFields?: KeyValuePair<string, any>[];
    centralPoint?: CentralPoint;
}
