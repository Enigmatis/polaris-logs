import { Reality } from './reality';

export interface Entity {
    id?: string;
    type?: string;
    reality?: Reality;
    name?: string;
    secondaryIds?: string[];
}
