const rescue = require("express-rescue");

const handler = {
    // Home
    all: () => {
        return [
            (req, res, next) => {
                next();
            },
            rescue(async (req, res) => {
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
