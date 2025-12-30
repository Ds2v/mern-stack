const mongoose = require("mongoose")
require('dotenv').config()

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const MONGO_DB = process.env.MONGO_DB

const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

console.log("🔗 Intentando conectar a MongoDB...");
console.log(`📍 Host: ${MONGO_HOST}:${MONGO_PORT}`);
console.log(`📦 Base de datos: ${MONGO_DB}`);

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB conectado exitosamente")
    })
    .catch((err) => {
        console.error("❌ Error conectando a MongoDB:", err)
    })

/*
const objetodb = mongoose.connection

objetodb.on("connected", ()=>{
    console.log("Conexion exitosa a MongoDB");    
})

objetodb.on("error", ()=>{
    console.log("Error en la conexión a MongoDB");    
})
*/

module.exports = mongoose