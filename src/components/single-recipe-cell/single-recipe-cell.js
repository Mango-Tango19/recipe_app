import './single-recipe-cell.css'
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { SinglrRecipePage } from '../../pages';

const SinglrRecipeCell = ({ recipeInfo }) => {
    return (
      <div className='col' >
        <div className='recipe-card mb-5'>
          <img className='img-fluid' src={`${recipeInfo.strMealThumb}`} alt='' />
          <div className='recipe-desc'>
            <p className='mb-0 lh-sm'>{recipeInfo.strMeal}</p>
            <ul className='list-inline mb-0 recipe-social-links'>
              <li className='list-inline-item'>
                 <Link to={`/search/${recipeInfo.idMeal}`} className='btn btn-outline-info btn-sm' >  
                  {/* <Routes>
                    <Route  path='search/:id' element={<SinglrRecipePage />}>
                      Watch full info
                    </Route>
                  </Routes> */}
                  Watch full info
                </Link> 
            
              </li>
          
            </ul>
          </div>
        </div>
      </div>
    );
  };

  export default SinglrRecipeCell