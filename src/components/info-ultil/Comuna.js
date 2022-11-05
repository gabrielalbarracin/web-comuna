import React from 'react';
import './estilos.css';
import icono from './img/icono.png'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';


const TelComuna = () => {
    return(
        <div style={{backgroundColor: '#f5f5f5'}}>
            {/* <div className="ml-5 mr-5 mt-4 mb-4 ">
                    <div className=" ml-5 mr-5 font-weight-bold" style={{backgroundColor: "#bbb"}} >
                        <img src={icono} width="28" height="29" class="text-left " alt="Logo"/>
                        <span className="center">Áreas Comunales</span>
                    </div>

            </div> */}

            <div id="lateral">
                <DropdownButton
                    as={ButtonGroup}
                    title="Áreas Comunales"
                    
                    id="estiloletra"
                    
                >
                    <div id="colorfondo">
                        <Dropdown.Item eventKey="1">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>OBRAS PÚBLICAS</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>DEPORTES</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="3">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>CULTURA Y EDUCACÍON</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="4">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>DESARROLLO SOCIAL</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>TURISMO</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>INSTITUCIONAL</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="5">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>PRODUCCIÓN</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                    </div>
                </DropdownButton>
                
            </div>

        </div>
    )
};

export default TelComuna;
