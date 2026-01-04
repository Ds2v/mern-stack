import React, {useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import AOS from "aos"
import "aos/dist/aos.css"
import Swal from 'sweetalert2'

function UsuarioIndividual({usuario}) {

    const navegar = useNavigate()

    useEffect(() => {
        //
        AOS.init()
    }, [])
    

    function eliminarUsuario(idUsuario) {
        axios.post("/api/usuario/eliminarusuario", {idUsuario: idUsuario})    
        .then(res => {
            console.log(res.data)            
            //alert(res.data.message)
            Swal.fire("Hecho!", "Usuario eliminado Exitosamente")
            navegar("/")
        }) 
        .catch(err => {
            console.log(err)}
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3" data-aos="flip-right">
                    <ul className="list-group">
                        <li className="list-group-item">{usuario.idUsuario}</li>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>
                    
                    <Link to={`/editarusuario/${usuario.idUsuario}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;                                        
                    <button className="btn btn-danger" onClick={()=>{eliminarUsuario(usuario.idUsuario)}}>Borrar</button>                    
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual;