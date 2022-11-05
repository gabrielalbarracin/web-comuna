//import { render } from '@testing-library/react';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import './carousel.css';
import BtnSuperiores from './btn-superiores';


const CarouselSuperior = () => {
    return (
        <div >
            {/* <Carousel>
                <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" max-height="100px"/>
                    <div class="carousel-inner" />
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img width={900} height={500} src={image1} class="d-block w-100" alt="..."/>
                        <div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <img width={900} height={500} src={image2} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                            <img width={900} height={500} src={image3} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </a>
                </div>
            </Carousel> */}

            <Carousel>
                <Carousel.Item interval={3000}>
                    <img height={500} alt="..." src={image1} class="d-block w-100"/>
                    <Carousel.Caption>
                        <h2 class="font-weight-bold mt-2">
                            <span>Descubrí Teodelina,</span> 
                            <span> la perla del sur santafecino</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img height={500} alt="..." src={image2} class="d-block w-100"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img height={500} alt="..." src={image3} class="d-block w-100"/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 

            <BtnSuperiores />
            
        </div>
    )
}



export default CarouselSuperior;
