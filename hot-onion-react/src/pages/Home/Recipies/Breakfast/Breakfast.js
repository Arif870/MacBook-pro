import useFoods from "../../../../Hooks/useFoods";
import BreakFastFoods from "../BreakfastFoods/BreakFastFoods";

export default function Breakfast() {
  const { breakfast } = useFoods();
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap">
        {breakfast.map(breakfastFoods => (
          <BreakFastFoods
            key={breakfastFoods.id}
            breakfastFoods={breakfastFoods}
          />
        ))}
      </div>
    </>
  );
}
