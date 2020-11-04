import { KeyValuePair } from './KeyValuePair';

export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?: KeyValuePair<string, any>[];
    action: string;
}
