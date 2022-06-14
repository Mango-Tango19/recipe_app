import IngridientRecipes from "../ingridient-recipe/ingridient-recipe";
import meals from "../../recipeDB.json";

const DefaultRecipeBlock = () => {
  const renderSingleRecipe = ({ strMealThumb, strMeal, idMeal }) => {
    return (
      <div key={idMeal}>
        <img className='img-fluid img-cover' src={strMealThumb} alt={strMeal} />
        <h6>{strMeal}</h6>
      </div>
    );
  };


let arr= []

    for (let key in meals) {
      debugger
    arr.push(
      <IngridientRecipes emoji={key}>
      {meals.meals[key].map((meal) => {
        return renderSingleRecipe(meal);
      })}
    </IngridientRecipes>
    )
      
    }
  


  return (
    <div className='row justify-content-center'>
      {arr}

      {/* <IngridientRecipes emoji='chicken'>
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
      </IngridientRecipes> */}
    </div>
  );
};

export default DefaultRecipeBlock;
