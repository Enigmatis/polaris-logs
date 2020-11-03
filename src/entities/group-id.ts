import { KeyValuePair } from './KeyValuePair';

export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?:  Array<KeyValuePair<string, any>>;
    action: Action;
}

export enum Action {
    WRAP = 'Wrap',
    SPLIT = 'Split',
    NOP = 'NOP',
}
