export class ApplicationLogProperties {

    //#region Data members

    private id: string;
    private name: string;
    private repositoryVersion: string;
    private environment: string;
    private component: string;

    //#endregion

    //#region Constructor

    constructor() {
    }

    //#endregion

    //#region Getters

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getRepositoryVersion(): string {
        return this.repositoryVersion;
    }

    getEnvironment(): string {
        return this.environment;
    }

    getComponent(): string {
        return this.component;
    }

    //#endregion

    //#region Setters

    setId(value: string) {
        this.id = value;
    }

    setName(value: string) {
        this.name = name;
    }

    setRepositoryVersion(value: string) {
        this.repositoryVersion = value;
    }

    setEnvironment(value: string) {
        this.environment = value;
    }

    setComponent(value: string) {
        this.component = value;
    }

    //#endregion
}
