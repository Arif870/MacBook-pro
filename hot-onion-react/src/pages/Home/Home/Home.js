import React from "react";
import Banner from "../Banner/Banner";
import Recipies from "../Recipies/Recipies/Recipies";
import BreakFast from "../Recipies/Breakfast/Breakfast";
import Chooseus from "../Chooseus/Chooseus";
import useAuth from "../../../Hooks/useAuth";

export default function Home() {
  return (
    <div>
      <Banner />

      <Recipies />
      <BreakFast />
      <Chooseus />
    </div>
  );
}
