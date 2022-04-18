import "./suggested.css";
import { useEffect, useState } from "react";
import DefaultRecipeBlock from "../default-recipe-block/default-recipe-block";
import SpecialRecipeBlock from "../special-recipe-block/special-recipe-block";



const SuggestedRecipes = ({ recipeData, mainIngridient }) => {

  let [ isDefault, setIsDefault  ] = useState(true)


  useEffect(() => {

    if (recipeData) {
    recipeData.length === 0 ?  setIsDefault(true) : setIsDefault(false) 
    }

    else {
      throw Error(`no data for ${mainIngridient} in API database`)

    }


  }, [recipeData, mainIngridient])


  return (
   
      <div className='container'>
        <div className='section-content'>
          <div className='row mb-2'>
            <div className='col-md-12'>
              <div className='heading-section text-center'>
                <h2>{isDefault ? "Most Popular Ingridients" : `Best recipes with ${mainIngridient}` }</h2>
              </div>
            </div>
          </div>

       { isDefault ? <DefaultRecipeBlock /> : <SpecialRecipeBlock recipeData={recipeData} />}
        </div>
      </div>
 
  );
};

export default SuggestedRecipes;
