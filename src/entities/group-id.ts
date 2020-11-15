import { JsonObject } from './json-object';

export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?: JsonObject;
    action: string;
}
