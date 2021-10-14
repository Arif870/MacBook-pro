import { useEffect, useState } from "react";

export default function useFoods() {
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [error, setError] = useState("");

  // get breakfast data
  useEffect(() => {
    fetch("./Breakfast.json")
      .then(response => response.json())
      .then(data => setBreakfast(data))
      .catch(error => {
        setError(error);
      });
  }, []);

  // get lunch data
  useEffect(() => {
    fetch("./Lunch.json")
      .then(response => response.json())
      .then(data => setLunch(data))
      .catch(error => {
        setError(error);
      });
  }, []);

  // get dinner data
  useEffect(() => {
    fetch("./Dinner.json")
      .then(response => response.json())
      .then(data => setDinner(data))
      .catch(error => {
        setError(error);
      });
  }, []);

  return { breakfast, error, lunch, dinner };
}
