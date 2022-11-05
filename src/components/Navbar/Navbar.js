import React from 'react';
import Logo from "./logo.jpg";
import './Navbar.css';
//import * as ReactBoptstrap from 'react-bootstrap';
//import bootstrap from 'bootstrap';

const Navbar = () => {
    return (
        <div>
            {/* <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                <h5 class="text-white h4">Collapsed content</h5>
                <span class="text-muted">Toggleable via the navbar brand.</span>
            </div>
            </div> */}
            <nav class="navbar navbar-dark" style={{backgroundColor: "#0077d7"}}>
                <div class="container-fluid">
                    <a class="navbar-brand ml-0 mt-0 mb-0" href="#">
                        <img src={Logo} width="350" height="60"  class="d-inline-block float-left" alt="Logo"/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>

        </div>   
    )
};

//style={{backgroundColor: "#0077d7"}}
//bg-dark
export default Navbar;