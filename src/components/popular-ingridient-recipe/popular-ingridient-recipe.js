import {useState, useEffect} from 'react'
import SpecialRecipeBlock from "../special-recipe-block/special-recipe-block"

const PopularIngridientRecipe = ({getData, ingridient}) => {

  const [ recipeData, setRecipeData ] = useState([])


  useEffect(() => {
    if (ingridient) {
         getData(ingridient)
        .then(data => setRecipeData(data.meals))
        .catch((err) => err)
    }

  }, [ingridient, getData])

  return <SpecialRecipeBlock recipeData={recipeData} />


}

export default PopularIngridientRecipe