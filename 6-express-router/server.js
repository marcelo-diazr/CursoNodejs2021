const express = require ('express')
const mongoose = require('mongoose')
const routerV1 = require('./routers/')
const app = express()


routerV1(app)

mongoose.connect('mongodb://localhost/nodemongodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=> {
    console.log("Mongo OK")
})


app.listen(8080,() =>{
    console.log("Servicdor OK 8080")
})
