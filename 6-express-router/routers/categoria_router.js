const express = require ('express')
const {listar, getcategoria, guardar, borrar, actualizar} = require('../controller/categoria_controller')

const router = express.Router()

router.get('/categorias',listar)
router.get('/categorias/:id',getcategoria)
router.post('/categorias',guardar)
router.delete('/categorias/:id',borrar)
router.put('/categorias/:id',actualizar)

module.exports = router
