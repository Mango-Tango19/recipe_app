import './special-recipe-block.css'
import ErrorIndicator from '../error-indicator/error-indicator';

const RecipeColumn = ({ recipeInfo }) => {
  return (
    <div className='col-md-4'>
      <div className='recipe-card mb-5'>
        <img loading="lazy" className='img-fluid' src={`${recipeInfo.strMealThumb}`} alt='' />
        <div className='recipe-desc'>
          <p className='mb-0 lh-sm'>{recipeInfo.strMeal}</p>
          <ul className='list-inline mb-0 recipe-social-links'>
            <li className='list-inline-item'>
              <a href='/' className='btn btn-outline-info btn-sm'>
                Watch full info
              </a>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
};

const SpecialRecipeBlock = ({ recipeData }) => {
  
const renderColumns = (recipeInfo) => {

    return <RecipeColumn key={recipeInfo.idMeal} recipeInfo={recipeInfo} />;

}

  return (
    <div className='row row-cols-3'>
      {recipeData ? recipeData.map(renderColumns) : <ErrorIndicator message="Sorry, no recipes with this ingridient, please, try another one"/>}
    </div>
  );
};

export default SpecialRecipeBlock;
