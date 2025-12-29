const express = require("express")
const app = express()

// Importar la conexion de MongoDB
const conxionMongoDB = require("./conexion.js")

// Importar la ruta y el modelo de Usuario
const rutaUsuario = require("./rutas/usuario.js")

app.use("/api/usuario", rutaUsuario)

app.get("/", (req, res) =>{
    res.end("Welcome to the Server Node. JS - Ds2v")
})

// Configuración del server
app.listen(5000, function() {
    console.log("Server NODE conectado exitosamente!!!");
})