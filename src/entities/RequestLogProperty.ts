import {SystemLogProperty} from "./SystemLogProperty";

export class RequestLogProperty {

    //#region Data members

    private requestingIp: string;
    private requestingSystem: SystemLogProperty;
    private requestQuery: object;

    //#endregion

    //#region Constructor

    public constructor() {
    }

    //#endregion

    //#region Getters

    public getRequestingIp(): string {
        return this.requestingIp;
    }

    public getRequestingSystem(): SystemLogProperty {
        return this.requestingSystem;
    }

    public getRequestQuery(): object {
        return this.requestQuery;
    }

    //#endregion

    //#region Setters

    public setRequestingIp(value: string) {
        this.requestingIp = value;
    }

    public setRequestingSystem(value: SystemLogProperty) {
        this.requestingSystem = value;
    }

    public setRequestQuery(value: object) {
        this.requestQuery = value;
    }

    //#endregion
}
