import { useRandomRecipe } from "./useRandom"

const RandomRecipe = () => {

    const { state, performRequest } = useRandomRecipe()

    console.log(state)

    return <div>
        <button className="btn btn-primary" onClick={performRequest}> get random </button>
        <p>{state.data ? state.data.meals[0].strMeal : 'please get random'}</p>
    </div>
}

export default RandomRecipe