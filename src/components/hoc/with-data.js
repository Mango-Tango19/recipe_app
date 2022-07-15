import React from "react";
import LoadingIndicator from "../loading-indicator/loadingIndicator";

const withData = (View) => {
  return class extends React.Component {
  
    state = {
      recipeData: null,
    };

    componentDidMount() {

     if (this.props.id) {
        this.props.getData(this.props.id).then((data) => this.setState({ recipeData: data }));
      } else { 
        this.props.getData().then((data) => this.setState({ recipeData: data }));
      }
 
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