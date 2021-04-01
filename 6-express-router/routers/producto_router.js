const express = require ('express')
const {listar, guardar, borrar, actualizar} = require('../controller/producto_controller')

const router = express.Router()

router.get('/productos',listar)
router.post('/productos',guardar)
router.delete('/productos/:id',borrar)
router.put('/productos/:id',actualizar)

module.exports = router