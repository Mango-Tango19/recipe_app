import IngridientRecipes from "../ingridient-recipe/ingridient-recipe";
import meals from "../../recipeDB.json";

const DefaultRecipeBlock = () => {


  const renderSingleRecipe = ({ strMealThumb, strMeal, idMeal }) => {
    return (
      <div key={idMeal}>
        <img
          className='img-fluid img-cover'
          src={strMealThumb}
          alt={strMeal}
        />
        <h6>{strMeal}</h6>
      </div>
    );
  };

  //// replace  for key in val

  return (
    <div className='row justify-content-center'>
      <IngridientRecipes emoji='chicken'>
       {
        meals.meals['chicken'].map((meal) => {
          return renderSingleRecipe(meal)
        })
       }
      </IngridientRecipes>

      <IngridientRecipes emoji='beef'>
      {
        meals.meals['beef'].map((meal) => {
          return renderSingleRecipe(meal)
        })
       }
      </IngridientRecipes>

      <IngridientRecipes emoji='vegetables'>
      {
        meals.meals['vegetables'].map((meal) => {
          return renderSingleRecipe(meal)
        })
       }
      </IngridientRecipes>
    </div>
  );
};

export default DefaultRecipeBlock;
