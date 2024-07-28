import React, { useState } from 'react'
import Cards from './Cards/Cards'
import './Body.css'
import Searchfilter from './SearchFilter/Searchfilter';
function Body({Alldata}) {

    const[data,setData]=useState(Alldata);
  //   function setDatas(newData){
  //     setData(newData)
  // }


  return (
    <>
    <Searchfilter data={data} setData={setData}/>
    {/* <Cards data={data}/> */}
    </>
  )
}

export default Body