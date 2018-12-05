import {SystemLogProperty} from "./SystemLogProperty";

export class EventKindDescriptionLogProperty {

    //#region Data members

    private systemId: string;
    private requestingSystemId: string;

    //#endregion

    //#region Constructor

    constructor() {
    }

    //#endregion

    //#region Getters

    getSystemId(): string {
        return this.systemId;
    }

    getRequestingSystemId(): string {
        return this.requestingSystemId;
    }

    //#endregion

    //#region Setters

    setSystemId(value: string) {
        this.systemId = value;
        return this;
    }

    setRequestingSystemId(value: string) {
        this.requestingSystemId = value;
        return this;
    }

    //#endregion
}
