import React from 'react'
import './Cards.css'
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
function Cards({data}) {
  function star(item){
    let arr=[];
    for(let i=0;i<item.rating;i++){
      arr.push(<FaStar key={i}/>)
    }
    return arr;
  }
  return (
    // console.log(data),
    <>
    <div className="cards">
    {data.map((item,index) => {
      return (
        <div key={index} className='card' >
          <div className="detail">
          <h2>{item.name}
            <span>{star(item)}</span>
          </h2>
          <p><FaLocationDot/> {item.address}</p>
          <p><span>{item.outcode} </span><span>{item.postcode}</span></p>
          
          </div>
          <div className="type">
            <p>
            <span><PiForkKnifeFill/> {item.typeOfFood}</span>
            </p>
            <p  className='visit'>Visit Menu</p>
          </div>
        </div>
  )})}
    </div>

    </>
  )
}

export default Cards