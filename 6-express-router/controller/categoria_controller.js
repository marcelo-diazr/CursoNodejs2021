const ModelCategoria = require('../models/categoria_model')
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

function listar(req, res)   {
    res.json({
        data:data
    })
}

//===========
// Get Categorias
//===========

function getcategoria(req, res)   {
    res.json({
        
            id: 123,
            nombre: "Polos"
        
    })
}

//===========
// Guardar Categorias
//===========

function guardar(req, res)   {

    let data = {
        categoria_nombre : "Polos"
    }

    modelCategoria = new ModelCategoria(data)
    modelCategoria.save((err, docCategoria) => {
        console.log(err)
        console.log(docCategoria)
    })

    res.json({
        message: "Guardado"
    })
}

//===========
// Borrar Categorias
//===========
function borrar(req, res)   {
    res.json({
        message: "Borrado"
    })
}



//===========
// Actualizar Categorias
//===========

function actualizar (req, res)   {
    res.json({
        message: "Actualizado"
    })
}


module.exports ={
    listar,
    getcategoria,
    guardar,
    borrar,
    actualizar

}