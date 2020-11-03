import { KeyValuePair } from './KeyValuePair';

export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?:  Array<KeyValuePair<string, any>>;
}
