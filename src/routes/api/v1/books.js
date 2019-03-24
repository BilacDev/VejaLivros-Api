const router = require('express').Router()
const book = require('../../../models/books')

router.get('/', (req, res) => {
    book.find({})
    .then(data => res.json(data))
    .catch(err => res.json({ error: true, data: err }))
})

module.exports = router;