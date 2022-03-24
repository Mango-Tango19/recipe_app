import React from "react";
import withData from "../hoc/with-data";

const RandomRecipe = ({ recipeData }) => {

// dateModified: null
// idMeal: "52845"
// strArea: "British"
// strCategory: "Miscellaneous"
// strCreativeCommonsConfirmed: null
// strDrinkAlternate: null
// strImageSource: null
// strIngredient1: "Olive Oil"
// strIngredient2: "Onion"
// strIngredient3: "Garlic"
// strIngredient4: "Worcestershire Sauce"
// strIngredient5: "Tomato Puree"
// strIngredient6: "Turkey Mince"
// strIngredient7: "Eggs"
// strIngredient8: "Breadcrumbs"
// strIngredient9: "Barbeque Sauce"
// strIngredient10: "Cannellini Beans"
// strIngredient11: "Parsley"
// strIngredient12: ""
// strIngredient13: ""
// strIngredient14: ""
// strIngredient15: ""
// strIngredient16: ""
// strIngredient17: ""
// strIngredient18: ""
// strIngredient19: ""
// strIngredient20: ""
// strInstructions: "Heat oven to 180C/160C fan/gas 4. Heat the oil in a large frying pan and cook the onion for 8-10 mins until softened. Add the garlic, Worcestershire sauce and 2 tsp tomato purée, and stir until combined. Set aside to cool.\r\n\r\nPut the turkey mince, egg, breadcrumbs and cooled onion mix in a large bowl and season well. Mix everything to combine, then shape into a rectangular loaf and place in a large roasting tin. Spread 2 tbsp barbecue sauce over the meatloaf and bake for 30 mins.\r\n\r\nMeanwhile, drain 1 can of beans only, then pour both cans into a large bowl. Add the remaining barbecue sauce and tomato purée. Season and set aside.\r\n\r\nWhen the meatloaf has had its initial cooking time, scatter the beans around the outside and bake for 15 mins more until the meatloaf is cooked through and the beans are piping hot. Scatter over the parsley and serve the meatloaf in slices."
// strMeal: "Turkey Meatloaf"
// strMealThumb: "https://www.themealdb.com/images/media/meals/ypuxtw1511297463.jpg"
// strMeasure1: "1 tblsp "
// strMeasure2: "1 large"
// strMeasure3: "1 clove peeled crushed"
// strMeasure4: "2 tblsp "
// strMeasure5: "3 tsp"
// strMeasure6: "500g"
// strMeasure7: "1 large"
// strMeasure8: "85g"
// strMeasure9: "2 tblsp "
// strMeasure10: "800g"
// strMeasure11: "2 tblsp "
// strMeasure12: ""
// strMeasure13: ""
// strMeasure14: ""
// strMeasure15: ""
// strMeasure16: ""
// strMeasure17: ""
// strMeasure18: ""
// strMeasure19: ""
// strMeasure20: ""
// strSource: "https://www.bbcgoodfood.com/recipes/turkey-meatloaf"
// strTags: "Alcoholic"
// strYoutube: "https://www.youtube.com/watch?v=mTvlmY4vCug"
  // return <p>{recipeData.meals[0].strMeal}</p>;

  return  <div className="col-sm-10 py-5 pl-md-0 pl-4">
  <div className="heading-section pl-lg-5 ml-md-5">
      <span className="subheading">
        Recipe of the day!
      </span>
      <h2>
      {recipeData.meals[0].strMeal}
      </h2>
  </div>
  <div className="pl-lg-5 ml-md-5">
  <img src={`${recipeData.meals[0].strMealThumb}`} className="rounded float-start img-fluid" alt="" />
      <p>{recipeData.meals[0].strInstructions}</p>
      <h3 className="mt-5">Special Recipe</h3>
      {/* <div className="row">
          <div className="col-4">
              <a href="#" className="thumb-menu">
                  <img className="img-fluid img-cover" src="img/hero-1.jpg" />
                  <h6>Australian Organic Beef</h6>
              </a>
          </div>
          <div className="col-4">
              <a href="#" className="thumb-menu">
                  <img className="img-fluid img-cover" src="img/hero-1.jpg" />
                  <h6>Australian Organic Beef</h6>
              </a>
          </div>
          <div className="col-4">
              <a href="#" className="thumb-menu">
                  <img className="img-fluid img-cover" src="img/hero-1.jpg" />
                  <h6>Australian Organic Beef</h6>
              </a>
          </div>
      </div> */}
  </div>
</div>
};

export default withData(RandomRecipe);
