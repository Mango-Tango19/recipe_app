//import { useRandomRecipe } from "./useRandom"
//import * as actions from '../../redux/actions/fetching-actions'
//import { connect } from "react-redux"
//import { bindActionCreators } from 'redux'
import  WithService from '../hoc/with-service'
//import WithData from '../hoc/with-data'
// import { useCallback, useEffect, useState } from 'react'

import React from "react"

 import LoadingIndicator from "../loading-indicator/loadingIndicator"



class RandomRecipe extends React.Component {


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
  
        return randomRecipeData ?
            <p>{randomRecipeData.meals[0].strMeal}</p>  : 
          <LoadingIndicator />}
      
    };

    //console.log(props)

    

    // const [ randomRecipeData, setRandomRecipeData ] = useState(null)
  

    // const getRandomData = useCallback(() => {
    //     recipeService.getRandomrecipe()
    //     .then(( data) => setRandomRecipeData(data))
    // }, [recipeService])

    // useEffect(() => {
    //     getRandomData()
    // }, [getRandomData])



//     return <div>
//         <button className="btn btn-primary" > get random </button>
//         {/* <p>{randomRecipeData.meals[0].strMeal}</p> */}
//         <p>Hello!</p>
        
//     </div>
// }

// const mapStateToProps = (state) => {
//     return {
//         state: state.randomReducer
//     }

// }

// const mapDispatchToProps = (dispatch) => {

//     const { send_request, request_success, request_error } = bindActionCreators(actions, dispatch)

//     return {
//         send_request, request_success, request_error 
//     }

// }
//export default RandomRecipe
export default WithService()(RandomRecipe)

