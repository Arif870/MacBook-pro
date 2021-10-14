import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import Banner from "../../Banner/Banner";
import LunchFoods from "../LunchFoods/LunchFoods";
import Recipies from "../Recipies/Recipies";

export default function Lunch() {
  const { lunch } = useFoods();
  return (
    <>
      <Banner />
      <Recipies />
      <div className="container d-flex justify-content-center flex-wrap">
        {lunch.map(lunchFoods => (
          <LunchFoods key={lunchFoods.id} lunchFoods={lunchFoods} />
        ))}
      </div>
    </>
  );
}
