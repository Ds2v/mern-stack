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


// Agregar Usuario

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

// Obtener todos los Usuarios

router.get("/obtenerusuarios", async (req, res) => {
    try {
        const docs = await modeloUsuario.find({})
        res.status(200).json({
            success: true,
            message: "Usuarios encontrados exitosamente!!!",
            data: docs
        })
    } catch (err) {
        console.error("Erorr al listar usuarios")
        res.status(500).json({
            success: false,
            message: "Error al listar usuario",
            error: err.message
        })
    }
})

module.exports = router