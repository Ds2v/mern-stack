import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'

function EditarUsuario() {

    const params = useParams()

    // Hooks 
    const[nombre, setNombre]=useState("")
    const[email, setEmail]=useState("")
    const[telefono, setTelefono]=useState("")

     const navegar = useNavigate()

    useEffect(() => {
        axios.post("/api/usuario/obtenerdatausuario", {idUsuario: params.idUsuario})
            .then(res => {
                console.log(res.data[0])
                const dataUsuario = res.data[0]
                setNombre(dataUsuario.nombre)
                setEmail(dataUsuario.email)
                setTelefono(dataUsuario.telefono)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    
    
    function editarUsuario() {
        //
        var usuario = {
            nombre: nombre,
            email: email,
            telefono: telefono,
            idUsuario: params.idUsuario
        }
        console.log(usuario);

        axios.post("/api/usuario/editarusuario", usuario)    
        .then(res => {
            console.log(res.data);            
            //alert(res.data.message)
            Swal.fire("Muy bien!", "Usuario editado Exitosamente")
            navegar("/")
        }) 
        .catch(err => {
            console.log(err)}
        )
    }
    
    return(
        <div className="container">
            <div className="row">
                <h3 className="mt-4">Editar usuario</h3>
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
                    <button onClick={editarUsuario} className="btn btn-success">Guardar</button>
                </div>
            </div>            
        </div>
    )    
     
}

export default EditarUsuario;