import ErrorIndicator from '../error-indicator/error-indicator';
import SinglrRecipeCell from '../single-recipe-cell/single-recipe-cell';

const SpecialRecipeBlock = ({ recipeData }) => {
  
const renderColumns = (recipeInfo) => {

    return <SinglrRecipeCell key={recipeInfo.idMeal} recipeInfo={recipeInfo} />;

}

  return (
    <div className='row justify-content-md-center row-cols-1 row-cols-sm-2 row-cols-md-4'>
      {recipeData ? recipeData.map(renderColumns) : <ErrorIndicator message="Sorry, no recipes with this ingridient, please, try another one"/>}
    </div>
  );
};

export default SpecialRecipeBlock;
