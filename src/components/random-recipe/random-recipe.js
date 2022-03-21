import React from "react";
import withData from "../hoc/with-data";

const RandomRecipe = ({ recipeData }) => {
  return <p>{recipeData.meals[0].strMeal}</p>;
};

export default withData(RandomRecipe);
