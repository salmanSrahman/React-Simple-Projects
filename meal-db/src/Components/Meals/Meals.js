import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";
import MealDetails from "../MealDetails/MealDetails";
import style from "./Meals.module.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div className={style.Meals__container}>
      <Container>
        <Row className="g-2">
          <Col md={9}>
            <Row md={3} className="g-4">
              {meals.map((meal) => (
                <Meal key={meal.idMeal} meal={meal}></Meal>
              ))}
            </Row>
          </Col>
          <Col md={3}>
            <MealDetails />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Meals;
