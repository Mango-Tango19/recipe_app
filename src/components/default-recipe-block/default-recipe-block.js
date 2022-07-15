import IngridientRecipes from "../ingridient-recipe/ingridient-recipe";
import SinglrRecipeCell from "../single-recipe-cell/single-recipe-cell";
import meals from "../../recipeDB.json";

const DefaultRecipeBlock = () => {
  const renderSingleRecipe = (meal) => {
    return (
      <SinglrRecipeCell recipeInfo={meal} key={meal.idMeal}/>
    );
  };



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

      <IngridientRecipes emoji='salmon'>
      {
        meals.meals['salmon'].map((meal) => {
          return renderSingleRecipe(meal)
        })
       }
      </IngridientRecipes>
    </div>
  );
};

export default DefaultRecipeBlock;
