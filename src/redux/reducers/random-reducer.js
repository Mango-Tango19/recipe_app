const initialState = {
    isError: false,
    isLoading: false,
    data: null
}


const randomReducer = (state = initialState, action) => {
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

export default randomReducer