const express = require ('express')

const app = express()

app.use(require('./rutas/'))

app.listen(8080,() =>{
    console.log("Servicdor OK 8080")
})

