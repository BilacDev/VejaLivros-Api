const router = require('express').Router()
const models = require('../../../models')

router.get('/', (req, res) => {
    models.books.findAll({})
    .then(books => res.json(res.setData(books)))
})

module.exports = router;