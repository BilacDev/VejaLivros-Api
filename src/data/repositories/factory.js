import { createMongo } from "../connections/factory"
import { Schema, model } from "mongoose"
import { BookRepository } from "./BookRepository";

exports.createBookRepository = () => {
    const mongoConnection = createMongo()
    let schema = new Schema({
        title: String,
        subtitle: String
    });
    return new BookRepository(mongoConnection, model('Books', schema))    
}