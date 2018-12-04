export class RealityLogProperty {

    //#region Data members

    private type: string;
    private id: string;

    //#endregion

    //#region Constructor

    constructor() {
    }

    //#endregion

    //#region Getters

    getType(): string {
        return this.type;
    }

    getId(): string {
        return this.id;
    }

    //#endregion

    //#region Setters

    setType(value: string) {
        this.type = value;
    }

    setId(value: string) {
        this.id = value;
    }

    //#endregion
}
