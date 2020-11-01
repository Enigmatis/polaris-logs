export interface Identifiable {
    id: string;
    name?: string;
    secondaryIds?: Map<string, any>;
}
