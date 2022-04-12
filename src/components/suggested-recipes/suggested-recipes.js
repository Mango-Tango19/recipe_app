import "./suggested.css";
import Emoji from "../emoji-component/emoji";
import { useMemo, useState } from "react";

const IngridientElement = ({ emoji }) => {
  const emojiObj = useMemo(() => {
    return {
      chicken: "🍗",
      beef: "🍖",
      vegetables: "🥗",
    };
  }, []);

  return (
    <div className='col-lg-4 col-sm-4  col-xs-1 d-flex justify-content-center py-3 flex-column '>
      <a href='/' className='thumb-menu btn btn-info'>
       { emojiObj[emoji] ? <Emoji label={emoji} symbol={emojiObj[emoji]} /> : <p>{ emoji }</p> }
      </a>
        <img className="img-fluid img-cover" src="https://spoonacular.com/recipeImages/654959-312x231.jpg" alt="Hello!" />
        <h6>Australian Organic Beef</h6>
    </div>
  );
};

const SuggestedRecipes = ({ mainIngridient }) => {
  let [ isDefault, setIsDefault  ] = useState(true)
  let [ingridientArray, setIngridientArray] = useState([
    "chicken",
    "beef",
    "vegetables",
  ]);


//   if (mainIngridient) {
//     setIsDefault(false)
//     setIngridientArray([mainIngridient.toLowerCase()])
//   } 


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

          <div className='row justify-content-center'>
            {ingridientArray.map((ingridient) => {
              return <IngridientElement key={ingridient} emoji={ingridient} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestedRecipes;
