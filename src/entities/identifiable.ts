import { SecondaryId } from './secondary-id';

export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?: SecondaryId[];
}
