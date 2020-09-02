import { Reality } from './reality';

export interface Entity {
    id?: string;
    reality?: Reality;
    name?: string;
    secondaryIds?: string[];
}
