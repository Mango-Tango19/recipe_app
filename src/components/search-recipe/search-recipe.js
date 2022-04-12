import { useMemo, useState } from "react"; 
import SearchPanel from "../search-panel/search-panel";
import SuggestedRecipes from "../suggested-recipes/suggested-recipes";

const SearchRecipe = () => {

  const [ mainIngridient, setMainIngridient ] = useState('')

  const ingridientToSend = useMemo(() => {
  return mainIngridient
  }, [mainIngridient])

  return (
    <>
            <SearchPanel setMainIngridient={setMainIngridient}/>
            <SuggestedRecipes mainIngridient={ingridientToSend}/>
    </>


   
  );
};

export default SearchRecipe;
