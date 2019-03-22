module.exports = (app) => {
    app.get("/", (req, res) => res.json(res.data));
};
