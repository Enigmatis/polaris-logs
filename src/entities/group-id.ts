export interface GroupId {
    id: string;
    name?: string;
    secondaryIds?: Record<string, any>[];
    action: string;
}
