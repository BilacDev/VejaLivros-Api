const router = require('express').Router()
const models = require('../../../models')

router.get('/', (req, res) => {
    models.books.findAll({
        include: [
            { model: models.authors, attributes: ['name'] }
        ]
    })
    .then(books => res.json(res.setData(books)))
})

module.exports = router;