import mongo from "./mongo";

const mongoConnection = mongo.createConnection({
    uri: process.env.DB_MONGO_URI,
    dbName: process.env.DB_MONGO_NAME,
});

module.exports = mongoConnection;
