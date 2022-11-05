import React from 'react';
import Logo from './logoPNG.png';
// import Facabook from './img/facebook.jpg';
// import Instagram from './img/instagram.jpg';
// import Ubicacion from './img/ubicacion.jpg';

import Facabook from './img/facebook.png';
import Instagram from './img/instagram.png';
import Ubicacion from './img/gps.png';


const NavbarInferior = () => {
    return(
        <div>

            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#0077d7"}}>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mx-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">
                            <h4 class="font-weight-bold text-white">
                                <ul class=" navbar-nav mx-auto"> 
                                    <span>teodelina.gob.ar</span>
                                </ul>
                            </h4>
                        </a>
                    </li>
                    </ul>          
                </div>
            </nav>
            

            <nav class="navbar navbar-dark" style={{backgroundColor: "#2d2d2d"}}>
                <div class="container-fluid mt-4">
                    <div className="ml-0">
                        <a class="navbar-brand">
                            <img src={Logo} width="300" height="60"  class="d-inline-block align-top float-left" alt="Logo"/>
                        </a>
                    </div>
                    <div class="text-center">
                        <span className="text-white">
                            Edificio Comunal: José Maria Moreno 306, Teodelina, RF7F+6P, Tel: +54 (3462) 440 088/201, Lun. a Vie. de 7:15 a 12:15 hs.
                            <br/> © 2021 | Derechos reservados Gobierno Comunal de Teodelina
                        </span>
                    </div>
                    <a>
                        <a href="https://www.facebook.com/comunateodelina/" target="_blank" rel="noreferrer" >
                            <img src={Facabook} width="15" height="20"  class="d-inline-block align-top float-left ml-2" alt="Logo"/>
                        </a>
                        <a href="https://www.instagram.com/comunateodelina/" target="_blank" rel="noreferrer" >
                            <img src={Instagram} width="15" height="20"  class="d-inline-block align-top float-left ml-2" alt="Logo"/>
                        </a>
                        <a  href="https://www.google.com/maps/place/Comuna+de+Teodelina/@-34.1859977,-61.5282548,16z/data=!4m13!1m7!3m6!1s0x95c792451029ffd1:0x55e344d9771bb28b!2sTeodelina,+Santa+Fe!3b1!8m2!3d-34.1862776!4d-61.5285506!3m4!1s0x95c7931f2af760a1:0x41454928de19335f!8m2!3d-34.1868893!4d-61.525649" target="_blank" rel="noreferrer" >
                            <img src={Ubicacion} width="15" height="20"  class="d-inline-block align-top float-left ml-2" alt="Logo"/>
                        </a>
                    </a>
                </div>
            </nav>
            <br></br>
            {/* <nav class="navbar navbar-dark" style={{backgroundColor: "#2d2d2d"}}>
                <div class="container-fluid mt-4">
                    <div className="ml-0 row">
                        <a class="navbar-brand">
                            <img src={Logo} width="300" height="60"  class="d-inline-block align-top float-left" alt="Logo"/>
                        </a>
                    </div>
                    <div className="row">
                        <span className="text-white">
                            <h3>Redes</h3>
                        </span>
                        <a>
                            <a href="https://www.facebook.com/comunateodelina/" >
                                <img src={Facabook} width="15" height="20"  class="d-inline-block align-top float-left ml-2" alt="Logo"/>
                            </a>
                            <a href="https://www.instagram.com/comunateodelina/" >
                                <img src={Instagram} width="15" height="20"  class="d-inline-block align-top float-left ml-2" alt="Logo"/>
                            </a>
                            <a  href="https://www.google.com/maps/place/Comuna+de+Teodelina/@-34.1859977,-61.5282548,16z/data=!4m13!1m7!3m6!1s0x95c792451029ffd1:0x55e344d9771bb28b!2sTeodelina,+Santa+Fe!3b1!8m2!3d-34.1862776!4d-61.5285506!3m4!1s0x95c7931f2af760a1:0x41454928de19335f!8m2!3d-34.1868893!4d-61.525649" >
                                <img src={Ubicacion} width="15" height="20"  class="d-inline-block align-top float-left ml-2" alt="Logo"/>
                            </a>
                        </a>
                    </div>

                    <div class="mx-auto row">
                        <span className="text-white">
                            Edificio Comunal: José Maria Moreno 306, Teodelina, RF7F+6P, Tel: +54 (3462) 440 088/201, Lun. a Vie. de 7:15 a 12:15 hs.
                            <br/><div className="text-center"><span> © 2021 | Derechos reservados Gobierno Comunal de Teodelina</span></div>
                        </span>
                    </div>
                </div>
            </nav> */}

        </div>
    )
}

//class="fl-fl float-tw"

export default NavbarInferior;
