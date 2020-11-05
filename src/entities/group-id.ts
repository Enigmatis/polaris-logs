import { KeyValuePair } from './key-value-pair';

export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?: KeyValuePair<string, any>[];
    action: string;
}
