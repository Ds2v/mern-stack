import React, { useState, useEffect } from "react";
import UsuarioIndividual from "./UsuarioIndividual";
import axios from "axios";
function ListaUsuaios() {

    // Hooks 
    const[dataUsuario, setDataUsuario]=useState([])

    useEffect(() => {
        axios.get("/api/usuario/obtenerusuarios")
        .then(res => {
            console.log(res);           
        })
        .catch(err => {
            console.log(err);            
        })
    }, [])
    
    

    return(
        <div>
            <h3>Listado de Usuarios</h3>
            <UsuarioIndividual></UsuarioIndividual>
        </div>
    )    
}

export default ListaUsuaios;