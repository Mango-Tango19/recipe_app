import { useCallback, useReducer, useEffect } from 'react'
//import Service from '../../service/service'

const initialState = {
    isError: false,
    isLoading: false,
    data: null
}


const randomReducer = (state, action) => {
    console.log(`Action: ${action.type}; Data:`, action.data)
    switch (action.type) {
        case 'RANDOM_RECIPE_REQUEST': 
            return {
                ...state,
                isLoading: true
            }
        case 'RANDOM_RECIPE_SUCCESS': 
        return {
            ...state,
            data: action.data
        }  
        case 'RANDOM_RECIPE_ERROR': 
        return {
            ...state,
            isError: true
        }     
        default:
        return state
        }

}

export const useRandomRecipe = () => {

    const [state, dispatch] = useReducer(randomReducer, initialState)


    const performRequest = useCallback(() => {

        dispatch({type: 'RANDOM_RECIPE_REQUEST'})

        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res => {
            if (!res.ok || res.status !== 200) {
                throw new Error(`Request failed with status code ${res.status}`)
            } 
            return res.json()
        })
        .then(data => {
            dispatch({ type: 'RANDOM_RECIPE_SUCCESS', data})
        })
        .catch(err => {
            console.error(err)
            dispatch({ type: 'RANDOM_RECIPE_ERROR' })
          })

    }, [])

    useEffect(() => {
        performRequest()
      }, [performRequest])



    return {
        state,
        performRequest
    }
}

