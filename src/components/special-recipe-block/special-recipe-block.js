const RecipeColumn = ({recipeInfo}) => {

  

    return  <div className='col-md-4'>
    <div className='team-card mb-5'>
      <img className='img-fluid' src={`${recipeInfo.strMealThumb}`} alt='' />
      <div className='team-desc'>
        <h4 className='mb-0'>{ recipeInfo.strMeal }</h4>
        <ul className='list-inline mb-0 team-social-links'>
          <li className='list-inline-item'>
            <a href='#'>
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li className='list-inline-item'>
            <a href='#'>
              <i className='fab fa-google-plus-g'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

}

const SpecialRecipeBlock = ({ recipeData }) => {
  console.log(recipeData);
  console.log('from special')



  return (
    <div className='row row-cols-3'>

        {
            (recipeData).map((recipeInfo) => {
                return <RecipeColumn key={recipeInfo.idMeal} recipeInfo={recipeInfo}/>
            })
        }
     
    </div>
  );
};

export default SpecialRecipeBlock;
