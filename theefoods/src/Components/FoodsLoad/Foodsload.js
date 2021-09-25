import "./Foodsload.css";
import { useState, useEffect } from "react";
import RecentlyAdded from "../RecentlyAdded/RecentlyAdded";
let Foodsload = () => {
  const [foods, setFoods] = useState([]);

  let [selectedFood, setSelectFood] = useState({});

  useEffect(() => {
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    fetch(url)
      .then(response => response.json())
      .then(data => setFoods(data.meals));
  }, []);

  let clickHandalar = food => {
    setSelectFood(food);
  };
  let changeHaldler = e => {
    let searchtext = e.target.value;
  };

  return (
    <div className="searchBox">
      <input
        onChange={changeHaldler}
        type="text"
        placeholder="Search Food..."
      />

      <div className="container">
        <div className="foodbox">
          {foods.map(food => (
            <div
              className="card"
              onClick={() => clickHandalar(food)}
              key={food.idMeal}
            >
              <img src={food.strMealThumb} alt="" />

              <h1>{food.strMeal}</h1>
              <p>Category : {food.strCategory}</p>
              <div className="watch">
                <a href={food.strYoutube} target="_blank" rel="noreferrer">
                  <i className="fab fa-youtube"></i> Watch
                </a>
                <small>
                  {food.strTags} <i className="fas fa-tags"></i>
                </small>
              </div>
            </div>
          ))}
        </div>

        <div>
          <RecentlyAdded selectedFood={selectedFood} />
        </div>
      </div>
    </div>
  );
};
export default Foodsload;
