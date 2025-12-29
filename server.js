const express = require("express")
const app = express()

// Importar la conexion de MongoDB
const conxionMongoDB = require("./conexion.js")

app.get("/", (req, res) =>{
    res.end("Welcome to de Server Node. JS - Ds2v")
})

// Configuración del server
app.listen(5000, function() {
    console.log("Server NODE conectado exitosamente!!!");
})