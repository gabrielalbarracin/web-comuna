//import './App.css';
import Navbar from '../components/Navbar/Navbar'
import Carousel from '../components/carousel/carousel';
import BtnFlotante from '../components/btn-flotante/BntFlotante';
import Noticia1  from '../components/Noticias/Noticia1';
import Noticia2  from '../components/Noticias/Noticia2';
import BtnVerMas from '../components/Noticias/VerMas';

import NavbarInferior from '../components/NavbarInferior/NavbarInferior';
import Agenda from '../components/Agenda/Agenda';


const HomeView = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <BtnFlotante />
      <div style={{backgroundColor: '#f5f5f5'}} className="">
        <div className="mr-5 ml-5" >
          <Noticia1 />
          <Noticia2 />
        </div>
        <BtnVerMas/>
      </div>
      <Agenda />
      <NavbarInferior />

    </div>
  );
}

export default HomeView;