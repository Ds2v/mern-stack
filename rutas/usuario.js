const express = require("express")
const router = express.Router() 
const mongoose = require("mongoose")
const schemaUser = mongoose.Schema

const esquemaUsuario = new schemaUser({
    nomnbre: String,
    email: String,
    telefono: String,
    idUsuario: String
});

const modeloUsuario = mongoose.model("usuarios", esquemaUsuario)


router.get("/ejemplo", (req, res) => {
    res.end("Carga desde ruta ejemplo")
})

module.exports = router