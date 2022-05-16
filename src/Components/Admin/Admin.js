import React from 'react'
import '../Admin/Admin.css'
import MainDash from './MainDash/MainDash'
import SideBar from './Sidebar/SideBar'
export default function Admin() {
  return (
    <div className="app">
        <div className="AppGlass">
             <SideBar/>
             <MainDash/>
        </div>
    </div>
  )
}
