//import { useRandomRecipe } from "./useRandom"
import * as actions from '../../redux/actions/fetching-actions'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

const RandomRecipe = ({state}) => {


console.log(state)

    return <div>
        <button className="btn btn-primary"> get random </button>
        <p>{state.data ? state.data.meals[0].strMeal : 'please get random'}</p>
        
    </div>
}

const mapStateToProps = (state) => {
    return {
        state: state.randomReducer
    }

}

const mapDispatchToProps = (dispatch) => {

    const { send_request, request_success, request_error } = bindActionCreators(actions, dispatch)

    return {
        send_request, request_success, request_error 
    }

}
//export default RandomRecipe
export default connect(mapStateToProps, mapDispatchToProps)(RandomRecipe)