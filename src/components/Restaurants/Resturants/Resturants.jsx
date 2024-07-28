import React from 'react'
import Footer from '../Footer/Footer'
import Body from './Body/Body'
import data from './data'
function Resturants() {
    // console.log("restauranet",data);
  return (
    <>
    <Body Alldata={data}/>
    <Footer/>
    </>
  )
}

export default Resturants