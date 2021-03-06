import withData from "../hoc/with-data";
import withService from "../hoc/with-service";
import "./single-recipe.css";

const SingleRecipe = ({ recipeData }) => {
  const videoBlock = (
    <iframe
      className='embed-responsive-item'
      src={`${recipeData.meals[0].strYoutube.replace("watch?v=", "embed/")}`}
      allowFullScreen
      title={recipeData.meals[0].idMeal}
    ></iframe>
  );

  return (
    <section className='bg-white section-padding'>
      <div className='container'>
        <div className='section-content'>
          <div className='row'>
            <div
              style={{
                backgroundImage: `url(${recipeData.meals[0].strMealThumb})`,
              }}
              className='col-sm-5 img-bg d-flex shadow align-items-center justify-content-center justify-content-md-end img-2'
            ></div>
            <div className='col-sm-7'>
              <div className='heading-section'>
                <h3>{recipeData.meals[0].strMeal}</h3>
              </div>
             
              {/* <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Ingridients</th>
                    <th scope='col'>Amount</th>
                  </tr>
                </thead>
                <tbody>{renderTableRows(recipeData.meals[0])}</tbody>
              </table> */}
              <div className='embed-responsive embed-responsive-16by9'>
                {recipeData.meals[0].strYoutube ? videoBlock : null}
              </div>

              <div className='pl-lg-5 ml-md-5'>
                <p>{recipeData.meals[0].strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withService(withData(SingleRecipe));
