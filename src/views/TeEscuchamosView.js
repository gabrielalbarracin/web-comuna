import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import NavbarInferior from '../components/NavbarInferior/NavbarInferior';
import FormularioConsulta from '../components/TeEscuchamos/TeEscuchamos';
import { Link } from 'react-router-dom';

const TeEscuchamosView = (props) => {
    return (
      <div className="App">
        <Navbar />
        <div className="ml-5">
            <div className="ml-4 mb-4">
                <a class="nav-link" to="/">
                    <Link to="/"><span>INICIO</span></Link><span> - Te Escuchamos</span>
                </a>
            </div>
    
            <div className="mr-5">
                <FormularioConsulta />
            </div>
        </div>
        <NavbarInferior />
      </div>
    );
  }
  
  export default TeEscuchamosView;