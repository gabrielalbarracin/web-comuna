import React from 'react';
import Calendar from 'react-calendar';
import Noticia1  from '../components/Noticias/Noticia1';
import Noticia2  from '../components/Noticias/Noticia2';
import BtnVerMas from '../components/Noticias/VerMas';


const ViewNews = (props) => {
    return (
      <div className="App">
        <div style={{backgroundColor: '#f5f5f5'}} className="">
          <div className="mr-5 ml-5" >
            <Noticia1 />
            <Noticia2 />
          </div>
          <div className="mx-auto">
            <BtnVerMas />
          </div>
          <div className="w-25">
              <Calendar />
          </div>
          <div>
            
          </div>
        </div>
  
      </div>
    );
}

export default ViewNews;