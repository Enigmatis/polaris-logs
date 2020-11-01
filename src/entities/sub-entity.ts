import { CentralPoint } from './central-point';

export interface SubEntity {
    id: string;
    name?: string;
    secondaryIds?: Map<string, any>;
    operationalData?: Map<string, any>;
    centralPoint?: CentralPoint;
}
