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
        res.send(docs)
        
    } catch (err) {
        console.error("Erorr al listar usuarios console")
        res.status(500).json({
            success: false,
            message: "Error al listar usuario",
            error: err.message
        })
    }
})

// Obtener data de usuario

router.post("/obtenerdatausuario", async (req, res) => {
    try {
        const user1 = await modeloUsuario.find({idUsuario:req.body.idUsuario})
        res.send(user1)
    
    } catch (err) {
        console.error("Error al buscar usuario:", err)
        res.status(500).json({
            success: false,
            message: "Error al buscar usuario",
            error: err.message
        })
    }
})


// Editar Usuario

router.post("/editarusuario", async (req, res) => {
    try {
        await modeloUsuario.findOneAndUpdate({idUsuario:req.body.idUsuario}, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono  
        });

        res.status(201).json({
            success: true,
            message: "Usuario editado exitosamente!!!"
        })

    } catch (err) {
        console.error("Error al editar usuario:", err)
        res.status(500).json({
            success: false,
            message: "Error al editar usuario",
            error: err.message
        })
    }
})

// Eliminar Usuario

router.post("/eliminarusuario", async(req, res) => {
    try {
        await modeloUsuario.findOneAndDelete({idUsuario:req.body.idUsuario})
        
        res.status(201).json({
            success: true,
            message: "Usuario eliminado exitosamente!!!"
        })
    } catch (err) {
        console.error("Error al eliminar usuario:", err)
        res.status(500).json({
            success: false,
            message: "Error al eliminar usuario",
            error: err.message
        })
    }
})

module.exports = router