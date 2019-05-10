const router = require('express').Router()
const models = require('../../../models')

// Retorna todos livros
router.get('/', (req, res) => {
    models.books.findAll({
        include: [
            { model: models.authors, attributes: ['name'] }
        ]
    })
        .then(books => res.json(res.setData(books)))
})

// Cria um novo livro
router.post('/', (req, res) => {
    const { body } = req

    models.books.create(body)
        .then(id => res.json(res.setData(id)))
        .catch(error => res.json(res.setError(error)))
})

// Altera um livro
router.put('/:id', (req, res) => {
    const { body } = req
    const id = req.params.id

    models.books.update(body, { where: { id: id } })
        .then(book => res.json(res.setData(book)))
        .catch(error => res.json(res.setError(error)))
})

// Deleta um livro
router.delete('/:id', (req, res) => {
    models.books.destroy({
        where: { id: req.params.id }
    }).then(id => res.json(res.setData(id)))
        .catch(error => res.json(res.setError(error)))
})
module.exports = router;