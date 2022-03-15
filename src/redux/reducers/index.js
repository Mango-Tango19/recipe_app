import { combineReducers } from "redux";

import randomReducer from './random-reducer'

export const reducers = combineReducers({
    randomReducer: randomReducer
})

export default reducers