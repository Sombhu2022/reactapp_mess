import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../style/slider.scss'

import  img1 from '../images/img1.jpg'
import  img2 from '../images/img2.jpg'
import  img3 from '../images/img3.jpg'
import  img4 from '../images/img4.jpg'


function slider() {
  return (
    <div className='slider-div'>
        <Carousel infiniteLoop autoPlay showArrows={true} showThumbs={true} showStatus={true} interval={2000} stopOnHover={true}>
            <div className='slider-image'>
                <img src={img1} alt="Image1" />
                <p className='legend'>Inter Mess Cricket Tournament </p></div>
            <div className='slider-image'>
                <img src={img2} alt="Image2" />
                <p className='legend'>Wall Magazine 'ABASWAR PATHIKRIT' </p></div>
            <div className='slider-image'>
                <img src={img3 } alt="Image3" />
                <p className='legend'>Mess Decoretion </p></div>
            <div className='slider-image'>
                <img src={img4 } alt="Image4" />
               
                <p className='legend'>'PATHIKRIT PUNARMILAN UTSHAB  2022'</p></div>
            <div className='slider-image'>
                <img src={img4 } alt="Image4" />
                <img src={img4 } alt="Image4" />
                <img src={img4 } alt="Image4" />
                </div>
        </Carousel>
    </div>
  )
}

export default slider