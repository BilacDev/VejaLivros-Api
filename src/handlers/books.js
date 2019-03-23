
import { createBookRepository } from "../data/repositories/factory"
const rescue = require("express-rescue");

const bookRepository = createBookRepository();

const handler = {
    // Home
    all: () => {
        return [
            (req, res, next) => {
                // Validation if needs
                next();
            },
            rescue(async (req, res) => {
                bookRepository.all().then(books => 
                    res.json(res.setData(books))
                )
            }),
            (error, req, res, next) => {
                res.json(
                    res.setErrorMessage("A error ocurred"),
                );
            },
        ];
    },
};

module.exports = handler;
