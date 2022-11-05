import React from 'react';
import Foto1 from './1.jpg';
//import Noticia2 from './Noticia2';
import './Noticia.css';

const Noticia1 = () => {
    return(
        <div className="mb-4">
            <div>
                <h2 class="font-weight-bold">
                    <div class="m-3 text-left"> 
                        <span>Últimas Noticias</span>
                    </div>
                </h2>
            </div>
            <div>
                <h6 class="ml-4">
                    <span >
                        <div class="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div> 
                        <div class="text-left">Illo officia suscipit facilis minima dignissimos dolorum,</div>
                        <div class="text-left">quae eum dicta rerum ea perspiciatis laboriosam et repudiandae impedit.</div>
                    </span>
                </h6>
            </div>
            <div class="row">
                <div class="card-group">
                    <div class="card ml-4">
                        <div class="contenedor__item"><img class="card-img-top" src={Foto1} alt="Card image cap"/>
                            <h5 class="contenedor__txt font-weight-bold">Card title</h5>
                        </div>
                        <div class="card-body">
                        <p class="card-text text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-left"><a href="#" class="text-danger">- Sigue leyendo</a></p>
                        </div>
                    </div>
                    
                    <div class="card ml-4">
                        <div class="contenedor__item"><img class="card-img-top" src={Foto1} alt="Card image cap"/>
                            <h5 class="contenedor__txt font-weight-bold">Card title</h5>
                        </div>
                        <div class="card-body">
                        <p class="card-text text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text text-left"><a href="#" class="text-danger">- Sigue leyendo</a></p>
                        </div>
                    </div>

                </div>
            
            </div>


        
        </div>
            
            
    );
};

//style={{backgroundColor: '#f5f5f5'}}
export default Noticia1;


