import { CentralPoint } from './central-point';

export interface SubEntity {
    id: string;
    name?: string;
    secondaryIds?: Record<string, any>[];
    operationalData?: Record<string, any>[];
    criticalFields?: Record<string, any>[];
    centralPoint?: CentralPoint;
}
