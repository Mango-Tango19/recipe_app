
import React from 'react'
//import RandomRecipe from "../components/random-recipe/random-recipe";
import SingleRecipe from '../components/single-recipe/single-recipe';
import SearchRecipe from "../components/search-recipe/search-recipe";
import SingleRecipeBySearch from '../components/single-recipe-by-search/single-recipe-by-search';
import Home  from './home';
import PopularIngridientRecipe from '../components/popular-ingridient-recipe/popular-ingridient-recipe';
import { useParams } from "react-router-dom";
import Profile from '../components/profile/profile';

import Service from "../service/service";

const service = new Service()

const { getRandomrecipe, getRecipesByIngridient, getRecipesById } = service

const HomePage =  () => <Home /> 
const RandomRecipePage = () => <SingleRecipe getData={getRandomrecipe} />
const SearchRecipePage = () =>  <SearchRecipe getData={ getRecipesByIngridient } />
const PopularIngridientRecipePage = ({ingridient}) => <PopularIngridientRecipe  getData={ getRecipesByIngridient } ingridient={ingridient} />
const SinglrRecipePage = () => {
    let params = useParams();
   return  <SingleRecipeBySearch getData={getRecipesById} id={params.id}/>
}
const ProfilePage = () => <Profile />

export {
    HomePage,
    RandomRecipePage,
    SearchRecipePage,
    PopularIngridientRecipePage,
    SinglrRecipePage,
    ProfilePage
}