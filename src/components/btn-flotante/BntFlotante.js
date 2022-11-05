import React from 'react';
import './Btn.css';
import tgi from './tgi.png';

const BtnFlotante = () => {
    return(
        <div class="fl-fl float-tw">
            <a href="https://pagos.asjservicios.com.ar:8092/?E=7415" target="_blank">
                <img src={tgi} class="d-inline-block align-top" alt="Logo"/>
            </a>
            
        </div>
    )
}

export default BtnFlotante;
//style={{backgroundColor: "#0077d7"}}