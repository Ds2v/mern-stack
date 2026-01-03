import logo from './logo.svg';
import './App.css';
import Inicio  from "./Inicio";
import ListaUsuarios from './ListaUsuarios';
import RegistrarUsuario from './RegistrarUsuario';
import EditarUsuario from './EditarUsuario';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">CRUD App MERN Stack - Ds2v</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="obtenerusuarios">Listar Usuarios</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="registrarusuario">Registrar Usuario</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Ayuda</a>
                  </li>            
                </ul>
              </div>
            </div>
        </nav>  
       
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />   
          
                                      
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Inicio></Inicio>}></Route>
                <Route path='obtenerusuarios' element={<ListaUsuarios></ListaUsuarios>}></Route>
                <Route path='registrarusuario' element={<RegistrarUsuario></RegistrarUsuario>}></Route>
                <Route path='editarusuario/:idUsuario' element={<EditarUsuario></EditarUsuario>}></Route>
              </Routes>
            </BrowserRouter>
          
       
        </header>
    </div>
  );
}

export default App;
