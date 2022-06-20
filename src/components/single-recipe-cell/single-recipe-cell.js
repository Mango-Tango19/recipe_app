import './single-recipe-cell.css'

const SinglrRecipeCell = ({ recipeInfo }) => {
    return (
      <div className='col' >
        <div className='recipe-card mb-5'>
          <img className='img-fluid' src={`${recipeInfo.strMealThumb}`} alt='' />
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

  export default SinglrRecipeCell