import RandomRecipe from "../components/random-recipe/random-recipe";

import Service from "../service/service";

const service = new Service()

const RandomRecipePage = () => {
  return <RandomRecipe getData={ service.getRandomrecipe }/>;
};

export default RandomRecipePage;
