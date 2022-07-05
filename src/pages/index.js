
import React from 'react'
//import RandomRecipe from "../components/random-recipe/random-recipe";
import SingleRecipe from '../components/single-recipe/single-recipe';
import SearchRecipe from "../components/search-recipe/search-recipe"
import Home  from './home';
import PopularIngridientRecipe from '../components/popular-ingridient-recipe/popular-ingridient-recipe';

import Service from "../service/service";

const service = new Service()

const { getRandomrecipe, getRecipesByIngridient } = service

const HomePage =  () => <Home /> 
const RandomRecipePage = () => <SingleRecipe getData={getRandomrecipe} />
const SearchRecipePage = () =>  <SearchRecipe getData={ getRecipesByIngridient } />
const PopularIngridientRecipePage = ({ingridient}) => <PopularIngridientRecipe  getData={ getRecipesByIngridient } ingridient={ingridient} />


export {
    HomePage,
    RandomRecipePage,
    SearchRecipePage,
    PopularIngridientRecipePage
}