import React from 'react'
import {useState} from 'react'
import {AnimateSharedLayout} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Card.css'
import{UilTimes} from '@iconscout/react-unicons'
const Card = (props) => {
  return (
    <AnimateSharedLayout>
        <CompactCard param={props}/>
    </AnimateSharedLayout>
  )
}
function CompactCard({param,setExpanded}){
    const Png = param.png
   return(
       <div className="CompactCard" 
       style={
         {
           background:param.color.backGround,
           boxShadow:param.color.boxShadow
         }
       }
       onClick={setExpanded}
       >
         <div className="radialBar">
           <CircularProgressbar value={param.barvalue} text={`${param.barvalue}%`}/>
           <span>{param.title}</span>
         </div>

         <div className="detail">
               <Png/>
               <span>${param.value}</span>
               <span>Last 24h</span>
         </div>
       </div>
   )
}

export default Card