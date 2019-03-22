import { DBModel } from "./DBModel";

export abstract class DBConnection {
    protected model: DBModel;
    protected conn: any;

    constructor(model: DBModel) {
        this.model = model;
    }

    protected abstract connect(): any;
}
