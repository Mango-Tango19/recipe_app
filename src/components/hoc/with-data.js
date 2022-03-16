import React from "react";
import LoadingIndicator from "../loading-indicator/loadingIndicator";

const WithData = (View) => {
  return class extends React.Component {
    state = {
      randomRecipeData: null,
    };

    componentDidMount() {
      this.props.recipeService
        .getRandomrecipe()
        .then((data) => this.setState({ randomRecipeData: data }));
    }

    render() {
      const { randomRecipeData } = this.state;

      return randomRecipeData ? (
        <View {...this.props} data={randomRecipeData} />
      ) : (
        <LoadingIndicator />
      );
    }
  };
};

export default WithData;
