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
// Listar Usuarios
//===========

function listar(req, res)   {
    res.json({
        data:data
    })
}

//===========
// Guardar Usuarios
//===========

function guardar(req, res)   {
    res.json({
        message: "Guardado"
    })
}

//===========
// Borrar Usuarios
//===========
function borrar(req, res)   {
    res.json({
        message: "Borrado"
    })
}

//===========
// Actualizar Usuarios
//===========

function actualizar (req, res)   {
    res.json({
        message: "Actualizado"
    })
}

module.exports ={
    listar,
    guardar,
    borrar,
    actualizar

}