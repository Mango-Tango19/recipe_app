import React from "react";
import LoadingIndicator from "../loading-indicator/loadingIndicator";

const withData = (View) => {
  return class extends React.Component {
    state = {
      recipeData: null,
    };

    componentDidMount() {
     this.props.getData().then((data) => this.setState({ recipeData: data }));
    }

    render() {
      const { recipeData } = this.state;

      return recipeData ? (
        <View recipeData={recipeData} { ...this.props } />
      ) : (
        <LoadingIndicator />
      );
    }
  };
};

export default withData