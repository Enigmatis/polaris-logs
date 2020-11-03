import { CentralPoint } from './central-point';
import { KeyValuePair } from './KeyValuePair';

export interface SubEntity {
    id: string;
    name?: string;
    secondaryIds?:  Array<KeyValuePair<string, any>>;
    operationalData?:  Array<KeyValuePair<string, any>>;
    criticalFields?:  Array<KeyValuePair<string, any>>;
    centralPoint?: CentralPoint;
}
