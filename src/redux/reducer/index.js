import {combineReducers} from 'redux'

import reducer from './weather'
const rootReducer=combineReducers({
    weather:reducer
})
export default rootReducer;