import React from "react";
import useFoods from "../../../../Hooks/useFoods";
import Banner from "../../Banner/Banner";
import DinnerFoods from "../DinnerFoods/DinnerFoods";
import Recipies from "../Recipies/Recipies";

export default function Dinner() {
  const { dinner } = useFoods();
  return (
    <>
      <Banner />
      <Recipies />
      <div className="container d-flex justify-content-center flex-wrap">
        {dinner.map(dinnerFoods => (
          <DinnerFoods key={dinnerFoods.id} dinnerFoods={dinnerFoods} />
        ))}
      </div>
    </>
  );
}
