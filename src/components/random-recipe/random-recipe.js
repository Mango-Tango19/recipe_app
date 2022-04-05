import React from 'react';
import withData from '../hoc/with-data';
import withService from '../hoc/with-service';


const RandomRecipe = ({ recipeData }) => {
    ///add strArea: "British"
    return (
        <div className='col-sm-10 py-3 pl-md-0 pl-4'>
            <div className='heading-section pl-lg-5 ml-md-5'>
                <span className='subheading'>Recipe of the day:</span>
                <h2>{recipeData.meals[0].strMeal}</h2>
            </div>
            <div className='pl-lg-5 ml-md-5'>
                <img
                    src={`${recipeData.meals[0].strMealThumb}`}
                    className='rounded img-fluid'
                    alt='Recipe of the day!'
                />
                <p>{recipeData.meals[0].strInstructions}</p>
            </div>
        </div>
    );
};

export default withService(
    withData(RandomRecipe)
);
