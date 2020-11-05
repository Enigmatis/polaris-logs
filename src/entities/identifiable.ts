import { KeyValuePair } from './key-value-pair';

export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?: KeyValuePair<string, any>[];
}
