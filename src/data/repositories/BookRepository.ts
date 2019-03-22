import { DBConnection } from "../connections/structures/DBConnection";

export class BookRepository {
    protected readonly connection: DBConnection;

    constructor(connection: DBConnection) {
        this.connection = connection;
    }

    async all() {
        
    }
}
