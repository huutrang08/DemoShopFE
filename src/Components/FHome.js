import React from 'react'
import FContens from './Content/FContens';
import FContents2 from './Content/FContents2';
import FSlide from './Slide/FSlide';
import FHeader from './Header/FHeader';
import "./index.css"
import FNav from './Navbar/FNav';
import im1 from '../Images/1.png'
import im2 from '../Images/2.png'
import im3 from '../Images/3.png'
import FSlide2 from './Slide/FSlide2';
import FSlide3 from './Slide/FSlide3';
import FFooter from './Footer/FFooter';
import { Divider } from 'semantic-ui-react';
import FTab from './Footer/FTab';
import FProducts from './Products/FProducts';
function FHome() {
  const im = {im1:im1,im2:im2,im3:im3}
  return (
    <div style={{backgroundColor: '#e7eaf1',marginBottom: '20px'}}>
      <FHeader/>
      <Divider/>
      <FNav/>
      <FSlide/>
      <Divider/>
      <FContens/>
      <Divider/>
      <FSlide2/>
      <FContents2/>
      <FSlide3/>
      <FTab/>
      <FFooter/>
    </div>
  );
}

export default FHome;
