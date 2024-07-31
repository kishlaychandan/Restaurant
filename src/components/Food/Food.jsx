import React, { useEffect, useState } from "react";
import style from "./Food.module.css";
function Food() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      let res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
      );
      res = await res.json();
      res = res.meals;
      setData(res);
    }
    getData();
  }, []);
  return (
    <>
      <h1 className={style.heading}>Food Desert</h1>
      <div className={style.food}>
        <div className={style.cards}>
          {data.map((item) => {
            return (
              <div key={item.idMeal} className={style.card}>
                <img className={style.image} src={item.strMealThumb} alt="" />
                
                <div className={style.content}>
                  <h1>{item.strMeal}</h1>
                  <h2>{item.strCategory}</h2>
                  <h3>{item.strTags}</h3>
                  <h3>{item.strYoutube}</h3>
                </div>
                <div className={style.para}>
                    <p>{item.strInstructions}</p>
                </div>
           </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Food;
