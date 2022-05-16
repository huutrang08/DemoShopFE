import React from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import im1 from '../../Images/books/1.png'
import im2 from '../../Images/books/2.png'
import im3 from '../../Images/books/3.png'
import im4 from '../../Images/books/4.png'
import im5 from '../../Images/books/5.png'
import im6 from '../../Images/books/6.png'
import im7 from '../../Images/books/7.png'
import im8 from '../../Images/books/8.png'
import im9 from '../../Images/books/9.png'
import im10 from '../../Images/books/10.png'
function FSlide2() {
    const style = {
        height: '250px',
        cursor: 'pointer',
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
                    slidesToShow: 8,
                    slidesToScroll: 4
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
      return (
        <div style={{marginTop:'20px', paddingTop: '30px', backgroundColor: 'white'}}>
          <div style={{marginBottom: '10px',marginLeft: '20px'}}>
              <b style={{fontSize:'25px'}}>
              Top Sellers in Books for you
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

export default FSlide2