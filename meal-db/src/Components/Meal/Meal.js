import React from "react";
import { Col } from "react-bootstrap";

const Meal = ({ meal }) => {
  console.log(meal);
  const { strMeal, strMealThumb } = meal;
  return (
    <Col>
      <div>
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="text-center py-2">{strMeal}</h4>
      </div>
    </Col>
  );
};

export default Meal;
