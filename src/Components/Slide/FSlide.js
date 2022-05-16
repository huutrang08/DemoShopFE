import React from 'react';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import im1 from '../../Images/1.png'
import im2 from '../../Images/2.png'
import im3 from '../../Images/3.png'
function FSlide() {
    const style = {
      height: '300px',
      cursor: 'pointer',
      width: '100%'
    };
    const properties = {
      duration: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 500,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
              }
          }
      ]
    };
    console.log(im1)
    return (
      <div>
        <div style={{marginBottom:'20px'}}>
          <Slide {...properties}>
            <div style={style}><img style={style} src={im1} alt="" /></div>
            <div style={style}><img style={style} src={im2} alt="" /></div>
            <div style={style}><img style={style} src={im3} alt="" /></div>
          </Slide>
        </div>
      </div>
    );
}

export default FSlide;
