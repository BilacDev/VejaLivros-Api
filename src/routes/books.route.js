const handler = require("../handlers/books");

module.exports = (app) => {
    app.get("/books", handler.all());
};
