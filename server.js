require('dotenv').config()
const express = require("express")
const app = express()

// Importar la conexion de MongoDB
const conxionMongoDB = require("./conexion.js")

// Importar la ruta y el modelo de Usuario
const rutaUsuario = require("./rutas/usuario.js")

// Importar y configurar body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:"true"}))

app.get("/", (req, res) =>{
    res.end("Welcome to the Server Node. JS - Ds2v")
})

app.use("/api/usuario", rutaUsuario)


// Configuración del server
const PORT = process.env.PORT || 5000
app.listen(PORT, function() {
    console.log(`Server NODE conectado exitosamente en puerto ${PORT}!!!`);
})