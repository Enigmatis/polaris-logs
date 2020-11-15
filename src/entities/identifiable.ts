import { JsonObject } from './json-object';

export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?: JsonObject;
}
