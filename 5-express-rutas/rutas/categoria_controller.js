const express = require('express')
const app = express()

const data = [
    {
        id: 123,
        nombre: "Polos"
    },
    {
        id: 124,
        nombre: "Pantalones"
    }
]

//===========
// Listar Categorias
//===========

app.get('/categorias',(req, res) => {
    res.json({
        data:data
    })
})

//===========
// Guardar Categorias
//===========

app.post('/categorias',(req, res) => {
    res.json({
        message: "Guardado"
    })
})

//===========
// Borrar Categorias
//===========
app.delete('/categorias/:id',(req, res) => {
    res.json({
        message: "Borrado"
    })
})



//===========
// Actualizar Categorias
//===========

app.put('/categorias/:id',(req, res) => {
    res.json({
        message: "Actualizado"
    })
})

module.exports = app;