export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?: Record<string, any>[];
}
