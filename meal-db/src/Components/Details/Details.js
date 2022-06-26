import React from "react";
import { Button } from "react-bootstrap";
import Style from "./Details.module.css";

const Details = ({ meal }) => {
  const { strMealThumb, strMeal, strCategory, strArea, strInstructions } = meal;
  return (
    <div className={Style.details__container}>
      <img src={strMealThumb} className="img-fluid" alt="" />
      <div>
        <h4>{strMeal}</h4>
        <p>
          <span className="fw-bold">Instruction:</span>{" "}
          {strInstructions.slice(0, 500)}
        </p>
        <Button variant="secondary" size="sm" disabled>
          {strCategory}
        </Button>
        <Button variant="secondary" size="sm" disabled className="ms-2">
          {strArea}
        </Button>
      </div>
    </div>
  );
};

export default Details;
