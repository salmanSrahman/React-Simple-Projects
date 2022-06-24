import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";
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
        <Row>
          <Col md={9}>
            <Row md={3}>
              {meals.map((meal) => (
                <Meal key={meal.idMeal} meal={meal}></Meal>
              ))}
            </Row>
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Meals;
