import React from 'react'
import Cards from '../Cards/Cards'
import '../MainDash/MainDash.css'
import BasicTable from '../Table/Table'
import TableDash from '../Table/Table'
const MainDash = () => {
  return (
    <div className="MainDash"> 
    <h1>DashBoard</h1>
      <Cards/>
      <h1 style={{margin:0}}> Table </h1>
      <BasicTable/>
    </div>
  )
}

export default MainDash