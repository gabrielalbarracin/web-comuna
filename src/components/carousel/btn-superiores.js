import React  from 'react';
import info   from './img/infopng.png';
import agenda from './img/agendapng.png';
import escuchamos from './img/escuchamospng.png';
import './btn.css'
import { Link } from 'react-router-dom';
//import Navbar from '../Navbar/Navbar';
//import InfoUtil from '../info-ultil/info-util';



const BtnSuperiores = () => {
    return(
        <div class="btn-group btn-group-lg mt-1" role="toolbar" >

             <div class="btn-group ml-3">
                {/*<button type="submit" class="btn btn-primary btn-lg">btn-lg : tamaño grande</button> 
                
                   <button type="submit" class="btn btn-primary btn-block" style={{backgroundColor: "#0077d7"}} to="/infoutil" >
                        <img src={info} width="30" height="30" class="d-inline-block align-top" alt="Logo"/>
                        <span class="ml-2">| Info útil</span>
                    </button> */}

                    
                        <button type="submit" class="btn btn-primary btn-block" style={{backgroundColor: "#0077d7"}}  >
                            {/* <Link to="/infoutil"> */}
                                <img src={info} width="30" height="30" class="d-inline-block align-top" alt="Logo"/>
                                <span class="ml-2">| Info útil</span>
                            {/* </Link> */}
                        </button>
                    
                    
            </div>
           {/* <Link to="/te_escuchamos"> */}
                <div class="btn-group ml-3">
                    <button type="submit" class="btn btn-primary btn-lg" style={{backgroundColor: "#0077d7"}}>
                        <img src={escuchamos} width="30" height="30" class="d-inline-block align-top" alt="Logo"/>
                        <span class="ml-2">| Te escuchamos!</span>
                    </button>
                </div>
            {/* </Link> */}

            {/* <Link to="/infoutil">       */}
                <div class="btn-group ml-3 mr-3">
                    <button type="button" class="btn font-weight-bold text-light" style={{backgroundColor: "#0077d7"}}>
                        <img src={agenda} width="30" height="30" class="d-inline-block align-top" alt="Logo"/>
                        <span class="ml-2">| Agenda</span>
                    </button>
                </div>
           {/* </Link>  */}
        </div>
    );
};

export default BtnSuperiores;



