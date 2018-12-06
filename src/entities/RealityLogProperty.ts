export class RealityLogProperty {

    //#region Data members

    private type: string;
    private id: string;

    //#endregion

    //#region Constructor

    public constructor() {
    }

    //#endregion

    //#region Getters

    public getType(): string {
        return this.type;
    }

    public getId(): string {
        return this.id;
    }

    //#endregion

    //#region Setters

    public setType(value: string) {
        this.type = value;
    }

    public setId(value: string) {
        this.id = value;
    }

    //#endregion
}
