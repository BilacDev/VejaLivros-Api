import * as mongoose from "mongoose";
import { DBConnection } from "./structures/DBConnection";
import { DBModel } from "./structures/DBModel";

export class MongoDB extends DBConnection {
    constructor(
        config: DBModel
    ) {
        super(config);
    }

    public connect() {
        mongoose.connect(this.model.DBUri(), { useNewUrlParser: true });
        mongoose.set("debug", true);

        this.conn = mongoose.connection;
        this.conn.onError("error", this.onError);
    }

    public onError(): void {
        console.error.bind(console, "MongoDB connection error:");
    }
}
