export class ApplicationLogProperties {

    //#region Data members

    private id: string;
    private name: string;
    private repositoryVersion: string;
    private environment: string;
    private component: string;

    //#endregion

    //#region Constructor

    public constructor(id: string, name: string, repositoryVersion: string, environment: string, component: string) {
        this.id = id;
        this.name = name;
        this.repositoryVersion = repositoryVersion;
        this.environment = environment;
        this.component = component;
    }

    //#endregion

    //#region Getters

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getRepositoryVersion(): string {
        return this.repositoryVersion;
    }

    public getEnvironment(): string {
        return this.environment;
    }

    public getComponent(): string {
        return this.component;
    }

    //#endregion

    //#region Setters

    public setId(value: string) {
        this.id = value;
    }

    public setName(value: string) {
        this.name = value;
    }

    public setRepositoryVersion(value: string) {
        this.repositoryVersion = value;
    }

    public setEnvironment(value: string) {
        this.environment = value;
    }

    public setComponent(value: string) {
        this.component = value;
    }

    //#endregion
}
