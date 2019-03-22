import { DBConnection } from "./structures/DBConnection";
import { DBModel } from "./structures/DBModel";
import mongoose from "mongoose";

export class MongoDB extends DBConnection {
    constructor(
        host: string,
        database: string,
        user: string,
        password: string,
        port: number
    ) {
        const config: DBModel = new DBModel();
        config.driver = "mongodb";
        config.host = host;
        config.database = database;
        config.user = user;
        config.password = password;
        config.port = port;

        super(config);
    }

    public connect() {
        mongoose.connect(this.model.DBUri(), { useNewUrlParser: true });
        mongoose.set('debug', true);

        // Get Mongoose to use the global promise library
        mongoose.Promise = global.Promise;
        
        this.conn = mongoose.connection
        this.conn.onError('error', this.onError)
        // tslint:disable-next-line:no-console
        console.log("Connecting MONGODB");
    }

    public onError() : void {
        console.error.bind(console, 'MongoDB connection error:')
    }
}
