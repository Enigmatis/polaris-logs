import {SystemLogProperty} from "./SystemLogProperty";

export class RequestLogProperty {

    //#region Data members

    private requestingIp: string;
    private requestingSystem: SystemLogProperty;

    //#endregion

    //#region Constructor

    constructor() {
    }

    //#endregion

    //#region Getters

    getRequestingIp(): string {
        return this.requestingIp;
    }

    getRequestingSystem(): SystemLogProperty {
        return this.requestingSystem;
    }

    //#endregion

    //#region Setters

    setRequestingIp(value: string) {
        this.requestingIp = value;
    }

    setRequestingSystem(value: SystemLogProperty) {
        this.requestingSystem = value;
    }

    //#endregion
}
