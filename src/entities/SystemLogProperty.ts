export class SystemLogProperty {

    //#region Data members

    private name: string;
    private id: string;

    //#endregion

    //#region Constructor

    constructor() {
    }

    //#endregion

    //#region Getters

    getName(): string {
        return this.name;
    }

    getId(): string {
        return this.id;
    }

    //#endregion

    //#region Setters

    setName(value: string) {
        this.name = value;
    }

    setId(value: string) {
        this.id = value;
    }

    //#endregion
}
