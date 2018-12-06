export class SystemLogProperty {

    //#region Data members

    private name: string;
    private id: string;

    //#endregion

    //#region Constructor

    public constructor() {
    }

    //#endregion

    //#region Getters

    public getName(): string {
        return this.name;
    }

    public getId(): string {
        return this.id;
    }

    //#endregion

    //#region Setters

    public setName(value: string) {
        this.name = value;
    }

    public setId(value: string) {
        this.id = value;
    }

    //#endregion
}
