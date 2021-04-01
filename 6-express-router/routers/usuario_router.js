const express = require ('express')
const {listar, guardar, borrar, actualizar} = require('../controller/usuarios_controller')

const router = express.Router()

router.get('/usuarios',listar)
router.post('/usuarios',guardar)
router.delete('/usuarios/:id',borrar)
router.put('/usuarios/:id',actualizar)

module.exports = router