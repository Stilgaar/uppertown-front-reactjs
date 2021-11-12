import React, { Component, useState } from 'react';
import ReactDOM from 'react-dom';
import Axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import "./SlideShow.css"


function SlideShow() {

    const tab = [
        "https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfHUnH1HvvhEqbYprsRYldixpRLORFvvH-zfQbmgTzz9S0yNaaUYJGb-piMIqamfm4b_k&usqp=CAU",
        "https://img-19.ccm2.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg"
    ]

    return(
        <Carousel className="carousel"
        infiniteLoop= {true}
        autoPlay= {true}
        interval= "5000"
        showThumbs= {false}
        showStatus= {false}
        dynamicHeight= {false}
        >

               {tab.map((tab, index) => { 
                   return( 
                    <div key={index}>
                   <img className="image-carousel" src={tab} alt="photo" />
                   </div>
                    ) })}
            </Carousel>
    )
};

/* ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel')); */
export default SlideShow;