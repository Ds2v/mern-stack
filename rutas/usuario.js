const express = require("express")
const router = express.Router() 
const mongoose = require("mongoose")
const schemaUser = mongoose.Schema

const esquemaUsuario = new schemaUser({
    nombre: String,
    email: String,
    telefono: String,
    idUsuario: String
});

const modeloUsuario = mongoose.model("usuarios", esquemaUsuario)

/* Ruta de prueba
router.get("/ejemplo", (req, res) => {
    res.end("Carga desde ruta ejemplo")
})
*/

router.post("/registrarusuario", async (req, res) => {
    try {
        const nuevoUsuario = new modeloUsuario({
            // Previo a este request se debe hacer npm install body-parser
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            idUsuario: req.body.idUsuario
        });

        await nuevoUsuario.save()

        res.status(201).json({
            success: true,
            message: "Usuario registrado exitosamente!!!",
            data: nuevoUsuario
        })

    } catch (err) {
        console.error("Error al registrar usuario:", err)
        res.status(500).json({
            success: false,
            message: "Error al registrar usuario",
            error: err.message
        })
    }
})

module.exports = router