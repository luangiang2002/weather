import {combineReducers} from 'redux'
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import WeatherReducer from './reducer/weather'
const rootReducer=combineReducers({
    weather:WeatherReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;