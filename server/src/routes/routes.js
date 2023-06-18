const {getAllBooks,insertarLibro} = require('../controllers/libros')

const router = require('express').Router()

router.get('/libros', getAllBooks)
router.post('/libros',insertarLibro)



module.exports = router