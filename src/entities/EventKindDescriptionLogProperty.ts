export class EventKindDescriptionLogProperty {

    //#region Data members

    private systemId: string;
    private requestingSystemId: string;

    //#endregion

    //#region Constructor

    public constructor() {
    }

    //#endregion

    //#region Getters

    public getSystemId(): string {
        return this.systemId;
    }

    public getRequestingSystemId(): string {
        return this.requestingSystemId;
    }

    //#endregion

    //#region Setters

    public setSystemId(value: string) {
        this.systemId = value;
        return this;
    }

    public setRequestingSystemId(value: string) {
        this.requestingSystemId = value;
        return this;
    }

    //#endregion
}
