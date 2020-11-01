export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?: Map<string, any>;
    action: Action;
}

export enum Action {
    WRAP = 'Wrap',
    SPLIT = 'Split',
    NOP = 'NOP',
}
