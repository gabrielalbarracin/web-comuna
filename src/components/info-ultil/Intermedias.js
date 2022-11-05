import React from 'react';
import './estilos.css';
import icono from './img/icono.png'
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

const Intermedias = () => {
    return(
        <div style={{backgroundColor: '#f5f5f5'}}>
            <div id="lateral">
                <DropdownButton
                    as={ButtonGroup}
                    title="INSTITUCIONES INTERMEDIAS"
                    
                    id="estiloletra"
                    
                >
                    <div id="colorfondo">
                        <Dropdown.Item eventKey="1">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>ESC FISCAL 177</span>
                                </div>
                                <div className="small ml-4">
                                    <span>Terminal de Omnibus + 3462 545454</span>
                                </div>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">
                            <div className="ml-5">
                                <div className="font-weight-bold text-primary ml-4">
                                    <span>ESC PROVINCIAL 6382</span>
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

export default Intermedias;