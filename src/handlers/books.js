const rescue = require("express-rescue");

const handler = {
    // Home
    all: () => {
        return [
            (req, res, next) => {
                // Validation if needs
                next();
            },
            rescue(async (req, res) => {
                req.$repositories.book.all().then(books =>
                    res.json(res.setData(books)),
                );
            }),
            (error, req, res, next) => {
                // tslint:disable-next-line:no-console
                console.log(error);
                res.json(
                    res.setErrorMessage("A error ocurred"),
                );
            },
        ];
    },
};

module.exports = handler;
