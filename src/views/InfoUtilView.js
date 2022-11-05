import React from 'react';
import BtnsInfoUtil from '../components/info-ultil/BtnInfoUtil'
import TelComuna from '../components/info-ultil/Comuna';
import Navbar from '../components/Navbar/Navbar';
import imgsup from '../img/img-sup.jpg';
import './../components/info-ultil/estilos.css';
import Deportes from '../components/info-ultil/Deportes';
import Educacion from '../components/info-ultil/Educacion';
import Intermedias from '../components/info-ultil/Intermedias';
import NavbarInferior from '../components/NavbarInferior/NavbarInferior';
import { Link } from 'react-router-dom';


const InfoUtilView = (props) => {
  return (
    <div className="App">
      <Navbar />
      <img src={imgsup} width='100%' height='100%' class="d-inline-block align-top" alt="img-superior"/>
      {/* linea que separa y ruta*/}
      <div className="ml-5 mr-r">
        <div className="ml-5 mr-5">
          <a class="nav-link" to="/">
            <Link to="/"><span>INICIO</span></Link><span> - Info Útil</span>
          </a>
          
          <BtnsInfoUtil />
          <div className="hr"><hr/></div>
        </div>
      </div>
      <TelComuna />
      <Deportes />
      <Educacion />
      <Intermedias />

      <div className="mt-5">
        <NavbarInferior />
      </div>
    </div>
  );
}

export default InfoUtilView;