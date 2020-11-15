import { SecondaryId } from './secondary-id';

export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?: SecondaryId[];
    action: string;
}
