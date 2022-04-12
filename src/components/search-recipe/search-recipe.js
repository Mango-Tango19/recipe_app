import { useState } from "react"; 
import SearchPanel from "../search-panel/search-panel";
import SuggestedRecipes from "../suggested-recipes/suggested-recipes";

const SearchRecipe = () => {


  const [ mainIngridient, setMainIngridient ] = useState('')

  return (
    <>
            <SearchPanel setMainIngridient={setMainIngridient}/>
            <SuggestedRecipes mainIngridient={mainIngridient}/>
    </>


   
  );
};

export default SearchRecipe;
