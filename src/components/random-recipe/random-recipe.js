///import { useRandomRecipe } from "./useRandom"
import { connect } from "react-redux"

const RandomRecipe = ({state}) => {

    //const { state, performRequest } = useRandomRecipe()

    console.log(state)

    return <div>
        <button className="btn btn-primary"> get random </button>
        {/* <p>{state.data ? state.data.meals[0].strMeal : 'please get random'}</p> */}
    </div>
}

const mapStateToProps = (state) => {
    return {
        state: state.randomReducer
    }

}


// const mapDispatchToProps = (dispatch) => {

//     return {

//     }

// }
export default connect(mapStateToProps)(RandomRecipe)