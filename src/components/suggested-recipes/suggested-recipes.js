import "./suggested.css";
//import Emoji from "../emoji-component/emoji";
import { useEffect, useState } from "react";
import DefaultRecipeBlock from "../default-recipe-block/default-recipe-block";
import SpecialRecipeBlock from "../special-recipe-block/special-recipe-block";



const SuggestedRecipes = ({ mainIngridient }) => {

  let [ isDefault, setIsDefault  ] = useState(true)
  // let [ingridientArray, setIngridientArray] = useState([
  //   "chicken",
  //   "beef",
  //   "vegetables",
  // ]);


  useEffect(() => {

    mainIngridient ? setIsDefault(false) : setIsDefault(true)

  }, [mainIngridient])


  return (
    <section id='gtco-menu' className='section-padding'>
      <div className='container'>
        <div className='section-content'>
          <div className='row mb-2'>
            <div className='col-md-12'>
              <div className='heading-section text-center'>
                <h2>{isDefault ? "Most Popular Ingridients" : `Best recipes with ${mainIngridient}`}</h2>
              </div>
            </div>
          </div>

       { isDefault ? <DefaultRecipeBlock /> : <SpecialRecipeBlock mainIngridient={mainIngridient} />}
        </div>
      </div>
    </section>
  );
};

export default SuggestedRecipes;
