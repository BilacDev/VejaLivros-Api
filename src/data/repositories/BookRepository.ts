import { DBConnection } from "../connections/structures/DBConnection";

export class BookRepository {
    public model: any;
    protected readonly connection: DBConnection;

    constructor(connection: DBConnection, model: any) {
        this.connection = connection;
        this.model = model;
        // TODO TYPEOF Model
    }

    public async all() {
        return await this.model.find({})
    }
}
