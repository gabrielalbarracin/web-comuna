import React from 'react';
import Foto1 from './img/1.jpg';
//import Logo from "./img/icono-agenda.png";



const CardAgenda = () => {
    return (
        <div class="align-self-end ml-3 ">
            
            <div class="container mt-4">
                <div class="row">
                    <div class="col-6 .col-md-4">
                        <div class="tg-category-posts tg-margin-bottom">
                            <img class="card-img-top" src={Foto1} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-6 .col-md-4 ">
                        <div class="card-body text-left">
                            <h5 class="card-title font-weight-bold">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div class="container mt-4">
                <div class="row">
                    <div class="col-6 .col-md-4">
                        <div class="tg-category-posts tg-margin-bottom">
                            <img class="card-img-top" src={Foto1} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-6 .col-md-4 ">
                        <div class="card-body text-left">
                            <h5 class="card-title font-weight-bold">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container mt-4">
                <div class="row">
                    <div class="col-6 .col-md-4">
                        <div class="tg-category-posts tg-margin-bottom">
                            <img class="card-img-top" src={Foto1} alt="Card image cap"/>
                        </div>
                    </div>
                    <div class="col-6 .col-md-4 ">
                        <div class="card-body text-left">
                            <h5 class="card-title font-weight-bold">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
            </div> */}

        </div> 
          
    )
};

export default CardAgenda;

