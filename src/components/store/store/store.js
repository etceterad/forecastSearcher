import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    input: '',
    forecast: [],
    forecastData: [],
    cityName: '',
    reqError: false,
    onLoad: false,
    loaded: false
}

const HANDLE_INPUT = "HANDLE_INPUT"
const GET_FORECAST = "GET_FORECAST"
const MAP_FORECAST = "MAP_FORECAST"
const GET_CITY = "GET_CITY"
const ERROR_CATCH = "ERROR_CATCH"
const SET_LOAD = "SET_LOAD"
const LOADED_CHART = "LOADED_CHART"

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case HANDLE_INPUT :
            return {...state, input: action.payload}
        case GET_FORECAST :
            return {...state, forecast: action.payload}
        case GET_CITY :
            return {...state, cityName: action.payload}
        case MAP_FORECAST :
            return {...state, forecastData: action.payload}
        case ERROR_CATCH :  
            return {...state, reqError: action.payload}
        case SET_LOAD :
            return {...state, onLoad: action.payload}
        case LOADED_CHART :
            return {...state, loaded: action.payload}    
        default:
            return state
    }
    
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store