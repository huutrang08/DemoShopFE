import React from 'react'
import { CardsData } from '../Data/Data'
import Card from '../Card/Card'
import "../Cards/Cards.css"
const Cards = () => {
  return (
    <div className="Cards">
        {CardsData.map((item,id)=>{
            return(
                <div className="parentContainer">
                    <Card
                    title={item.title}
                    color={item.color}
                    barvalue={item.barvalue}
                    value={item.value}
                    png={item.png}
                    serie={item.serie}
                    />
                </div>
            )
        })}
    </div>
  )
}

export default Cards