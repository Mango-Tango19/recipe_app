import { FoodServiceConsumer } from "../../service/service-context";

const withService = (Wrapped) => {
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

export default withService;
