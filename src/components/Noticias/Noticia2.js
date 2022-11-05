import React from 'react';
import Foto1 from './1.jpg';
import Foto2 from './barrio.png';
import Foto3 from './energia.png';
import './Noticia.css';


const Noticia2 = () => {
    return(
        <div class="row">
            <div class="card-group">
                    <div class="card ml-4">
                        <div class="contenedor__item"><img class="card-img-top2" src={Foto1} alt="Card image cap"/>
                            <h5 class="contenedor__txt font-weight-bold">Card title</h5>
                        </div>
                        <div class="card-body">
                        <p class="card-text text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-left"><a href="#" class="text-danger">- Sigue leyendo</a></p>
                        </div>
                    </div>
                    <div class="card ml-4">
                        <div class="contenedor__item"><img class="card-img-top2" src={Foto2} alt="Card image cap"/>
                            <h5 class="contenedor__txt font-weight-bold">Card title</h5>
                        </div>
                        <div class="card-body">
                        <p class="card-text text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-left"><a href="#" class="text-danger">- Sigue leyendo</a></p>
                        </div>
                    </div>
                    <div class="card ml-4">
                        <div class="contenedor__item"><img class="card-img-top2" src={Foto3} alt="Card image cap"/>
                            <h5 class="contenedor__txt font-weight-bold">Card title</h5>
                        </div>
                        <div class="card-body">
                        <p class="card-text text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-left"><a href="#" class="text-danger">- Sigue leyendo</a></p>
                        </div>
                    </div>
            </div>


        
        </div>
    );
};


export default Noticia2;
