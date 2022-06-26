import React, { useEffect, useState } from "react";
import Details from "../Details/Details";

const MealDetails = ({ mealDetails }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealDetails}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [mealDetails]);

  return (
    <div>
      {meals.map((meal) => (
        <Details meal={meal} key={meal.idMeal}></Details>
      ))}
    </div>
  );
};

export default MealDetails;
