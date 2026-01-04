import React, { useState} from "react"
import uniqid from "uniqid"
import axios from "axios"
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

function RegistrarUsuario() {

    // Hooks 
    const[nombre, setNombre]=useState("")
    const[email, setEmail]=useState("")
    const[telefono, setTelefono]=useState("")

    const navegar = useNavigate()

    function registrarUsuario() {
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            // Previo a este campo se debe hacer npm install uniqid
            idUsuario: uniqid()            
        }
        console.log(usuario);

        axios.post("/api/usuario/registrarusuario", usuario)    
        .then(res => {
            //alert(res.data.message)
            Swal.fire("Felicidades!", "Usuario registrado Exitosamente")
            navegar("/")
        })         
        .catch(err => {console.log(err)})        
    }

    return(
        <div className="container">
            <div className="row">
                <h3 className="mt-4">Crear nuevo usuario</h3>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                    </div>
                    <button onClick={registrarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>            
        </div>
    )    
}

export default RegistrarUsuario;