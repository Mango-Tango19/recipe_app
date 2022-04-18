import { useEffect, useMemo, useState } from "react"; 
import SearchPanel from "../search-panel/search-panel";
import SuggestedRecipes from "../suggested-recipes/suggested-recipes";

const SearchRecipe = ({getData}) => {

  const [ mainIngridient, setMainIngridient ] = useState('')
  const [ recipeData, setRecipeData ] = useState([])

  const ingridientToSend = useMemo(() => {
  return mainIngridient
  }, [mainIngridient])

  useEffect(() => {
    if (ingridientToSend) {
         getData(ingridientToSend)
        .then(data => setRecipeData(data.meals))
        .catch((err) => err)
    }

 

  }, [ingridientToSend, getData])

  return (
    <section>
            <SearchPanel setMainIngridient={setMainIngridient}/>
            <SuggestedRecipes recipeData={recipeData} mainIngridient={mainIngridient}/>
    </section>
  );
};

export default SearchRecipe
