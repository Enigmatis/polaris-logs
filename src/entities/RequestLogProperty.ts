import {SystemLogProperty} from "./SystemLogProperty";

export class RequestLogProperty {

    //#region Data members

    private requestingIp: string;
    private requestingSystem: SystemLogProperty;

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

    //#endregion

    //#region Setters

    public setRequestingIp(value: string) {
        this.requestingIp = value;
    }

    public setRequestingSystem(value: SystemLogProperty) {
        this.requestingSystem = value;
    }

    //#endregion
}
