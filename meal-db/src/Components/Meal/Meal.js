import React from "react";
import { Button, Col } from "react-bootstrap";
import style from "./Meal.module.css";

const Meal = ({ meal, seeDetails }) => {
  const { strMeal, strMealThumb, idMeal } = meal;

  return (
    <Col>
      <div className={style.Meal__container}>
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="text-center py-2">{strMeal}</h4>
        <Button
          className="text-center d-block w-100 mb-2"
          onClick={() => seeDetails(idMeal)}
        >
          See Details
        </Button>
        <Button className="text-center d-block w-100 mb-2" variant="success">
          Add To Cart
        </Button>
      </div>
    </Col>
  );
};

export default Meal;
