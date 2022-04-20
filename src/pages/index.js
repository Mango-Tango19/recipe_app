
import React from 'react'
//import RandomRecipe from "../components/random-recipe/random-recipe";
import SingleRecipe from '../components/single-recipe/single-recipe';
import SearchRecipe from "../components/search-recipe/search-recipe"
import Home  from './home';

import Service from "../service/service";

const service = new Service()

const { getRandomrecipe, getRecipesByIngridient } = service

const HomePage =  () => <Home /> 
const RandomRecipePage = () => <SingleRecipe getData={getRandomrecipe} />
const SearchRecipePage = () =>  <SearchRecipe getData={ getRecipesByIngridient } />


export {
    HomePage,
    RandomRecipePage,
    SearchRecipePage
}