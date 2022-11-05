import React from 'react';
import BtnVerMas from '../Noticias/VerMas';
import ReactCalendar from './calendario';
import CardAgenda from './CardAgenda';
import Logo from "./img/icono-agenda.png";



const Agenda = () => {
    return (
        <div>
            <nav class="navbar navbar-light" style={{backgroundColor:"#2d2d2d"}}>
            <div className="ml-2">
                <a class="navbar-brand ml-5" href="#">
                    <img src={Logo} width="30" height="30" class="d-inline-block align-top float-left" alt="" loading="lazy"/>
                    
                    <h4 class="font-weight-bold text-white float-left ml-2">
                        <div class="float-left"> 
                            <span> | Agenda</span>
                        </div>
                    </h4>   
                </a>
            </div>
            </nav>


            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <ReactCalendar />
                    </div>
                    <div class="col-7 mw-5" style={{backgroundColor: '#f5f5f5'}}>
                        <div>
                            <CardAgenda />
                        </div>
                        <div>
                            <CardAgenda />
                        </div>
                        <div>
                            <CardAgenda />
                        </div> 
                    </div>
                </div>
            </div>

            <div className="mx-auto">
                <BtnVerMas />
            </div>
    

        </div>   
    )
};

export default Agenda;
