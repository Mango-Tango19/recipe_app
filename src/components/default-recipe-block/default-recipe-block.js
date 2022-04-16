
import IngridientRecipes from "../ingridient-recipe/ingridient-recipe";


const DefaultRecipeBlock = () => {

  return (
    <div className='row justify-content-center'>
      <IngridientRecipes emoji='chicken' />

      <IngridientRecipes emoji='beef' />

      <IngridientRecipes emoji='vegetables' />
    </div>
  );
};

export default DefaultRecipeBlock;
