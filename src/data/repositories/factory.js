import { BookRepository } from "./BookRepository";
import mongoConnection from "../connections/factory";

exports.bookRepositoryFactory = () => {
    return new BookRepository(mongoConnection);
};
