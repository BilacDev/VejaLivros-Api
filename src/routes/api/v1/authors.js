const router = require('express').Router()
const models = require('../../../models')

// Retorna todos autores
router.get('/', (req, res) => {
    models.authors.findAll({})
        .then(authors => res.json(res.setData(authors)))
})

module.exports = router;