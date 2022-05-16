import React from 'react'
import Logo from '../Img/logo.png'
import './SideBar.css'
import {UilSignOutAlt} from "@iconscout/react-unicons";
import { SideBarData } from '../Data/Data';
import { useState } from 'react';
const SideBar = () => {
  const [select,setSelect] = useState(0);
  const handelClick = (x)=>{
    setSelect(x)
  }
    return (
    <div className="SideBar">
        <div className="logo">
            <img src={Logo} alt="" />
            <span>
            Sh<span>o</span>ps
            </span>
        </div>
        <div className="menus">
            {
              SideBarData.map((item,index)=>{
                return(
                  <div key={index} className={select===index?'menuIcon active':'menuIcon'} onClick={()=>handelClick(index)}>
                      <item.icon/>
                      <span>{item.heading}</span>
                  </div>
                )
              })
            }
            <div className="menuIcon">
                <UilSignOutAlt/>
            </div>
        </div>
    </div>
  )
}

export default SideBar