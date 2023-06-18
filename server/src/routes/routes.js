const {getAllBooks,insertBook} = require('../controllers/libros')

const router = require('express').Router()

router.get('/libros', getAllBooks)
router.post('/libros',insertBook)

module.exports = router



