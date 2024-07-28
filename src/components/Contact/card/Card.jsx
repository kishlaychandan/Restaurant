import React from 'react'
import style from './Card.module.css'
function Card({icon,heading,text}) {
  return (
    <>
    <div className={style.card}>
        <div className={style.icon}>
            {icon}
        </div>
        <div className={style.content}>
        <h1>{heading}</h1>
        <p>{text}</p>
        </div>
    </div>
    </>
  )
}

export default Card