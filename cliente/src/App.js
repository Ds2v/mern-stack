import logo from './logo.svg';
import './App.css';
import ListaUsuaios from './ListaUsuarios';
import RegistrarUsuario from './RegistrarUsuario';
import EditarUsuario from './EditarUsuario';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <p>
          Holaaaaaaaa <br></br>
          {/*Edit <code>src/App.js</code> and save to reload. */}  <br></br>
          ¡crud MERN Stack - Ds2v!
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ListaUsuaios></ListaUsuaios>}></Route>
              <Route path='agregarusuario' element={<RegistrarUsuario></RegistrarUsuario>}></Route>
              <Route path='editarusuario' element={<EditarUsuario></EditarUsuario>}></Route>
              <Route></Route>
            </Routes>
          </BrowserRouter>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
