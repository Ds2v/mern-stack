import React from "react";
function RegistrarUsuario() {

    function registrarUsuario() {
        
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
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Telefono</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <button onClick={registrarUsuario} className="btn btn-success">Guardar Usuario</button>
                </div>
            </div>            
        </div>
    )    
}

export default RegistrarUsuario;