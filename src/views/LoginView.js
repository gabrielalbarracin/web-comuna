import React from 'react';
import Login from '../components/Login/login';
import Navbar from '../components/Navbar/Navbar';
import NavbarInferior from '../components/NavbarInferior/NavbarInferior';


const LoginView = (props) => {
  return (
    <div className="App">
      <Navbar />
      
        <Login />

      <NavbarInferior />

    </div>
  );
}

export default LoginView;