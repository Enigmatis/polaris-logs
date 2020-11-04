import { KeyValuePair } from './KeyValuePair';

export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?: KeyValuePair<string, any>[];
}
