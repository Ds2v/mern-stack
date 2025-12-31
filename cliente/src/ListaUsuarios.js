import React, { useState, useEffect } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import axios from "axios";
function ListaUsuarios() {

    // Hooks 
    const [dataUsuario, setDataUsuario] = useState([])

    useEffect(() => {
        axios.get("/api/usuario/obtenerusuarios")
            .then(res => {
                console.log(res);
                setDataUsuario(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    // Mapeo lista de usuarios en objeto usuario
    const listaUsuarios = dataUsuario.map(usuario => {
        return (
            <UsuarioIndividual key={usuario._id || usuario.idUsuario} usuario={usuario}></UsuarioIndividual>
        )
    })



    return (
        <div className="container">
            <div className="row">
                <h3 className="mt-4 mb-4">Listado de Usuarios</h3>
                {listaUsuarios}
            </div>

        </div>
    )
}

export default ListaUsuarios;