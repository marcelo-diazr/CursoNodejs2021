const data = [
    {
        id: 123,
        categoria: "Polos",
        producto: "Polo Rambo"
    },
    {
        id: 124,
        categoria: "Polos",
        producto: "Polo Levy"
    }
]

//===========
// Listar Productos
//===========


function listar(req, res)   {
    res.json({
        data:data
    })
}

//===========
// Guardar Productos
//===========

function guardar(req, res)   {
    res.json({
        message: "Guardado"
    })
}

//===========
// Borrar Productos
//===========
function borrar(req, res)   {
    res.json({
        message: "Borrado"
    })
}



//===========
// Actualizar Productos
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