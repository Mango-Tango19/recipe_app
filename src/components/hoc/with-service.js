import { FoodServiceConsumer } from "../../service/service-context";

const WithService = (Wrapped) => {
  return (props) => {
    return (
      <FoodServiceConsumer>
        {(recipeService) => {
          return <Wrapped {...props} recipeService={recipeService} />;
        }}
      </FoodServiceConsumer>
    );
  };
};

export default WithService;
