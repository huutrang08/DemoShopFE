import React from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import im1 from '../../Images/kitchen/1.png'
import im2 from '../../Images/kitchen/2.png'
import im3 from '../../Images/kitchen/3.png'
import im4 from '../../Images/kitchen/4.png'
import im5 from '../../Images/kitchen/5.png'
import im6 from '../../Images/kitchen/6.png'
import im7 from '../../Images/kitchen/7.png'
import im8 from '../../Images/kitchen/8.png'
import im9 from '../../Images/kitchen/9.png'
import im10 from '../../Images/kitchen/10.png'
function FSlide3() {
    const style = {
        height: '250px',
        cursor: 'pointer',
      };
      const properties = {
        duration: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
      };
      return (
        <div style={{marginTop:'20px', paddingTop: '30px', backgroundColor: 'white'}}>
          <div style={{marginBottom: '10px',marginLeft: '20px'}}>
              <b style={{fontSize:'25px'}}>
              International top sellers in Kitchen
              </b>
            </div>
            <Slide {...properties}>
              <div><img style={style} src={im1} alt="" /></div>
              <div><img style={style} src={im2} alt="" /></div>
              <div><img style={style} src={im3} alt="" /></div>
              <div><img style={style} src={im4} alt="" /></div>
              <div><img style={style} src={im5} alt="" /></div>
              <div><img style={style} src={im6} alt="" /></div>
              <div><img style={style} src={im7} alt="" /></div>
              <div><img style={style} src={im8} alt="" /></div>
              <div><img style={style} src={im9} alt="" /></div>
              <div><img style={style} src={im10} alt="" /></div>
            </Slide>
        </div>
      );
}

export default FSlide3