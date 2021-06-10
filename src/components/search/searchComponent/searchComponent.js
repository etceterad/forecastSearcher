import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import fetchForecast from '../../store/asyncActions'

export default function SearchComponent(props) {
    const dispatch = useDispatch()
    const input = useSelector(state => state.input)

    const handleChange = (e) => {
        dispatch({type: "HANDLE_INPUT", payload: e.target.value})
    }

    const getForecast = async (e) => {
        e.preventDefault()
        dispatch({type: "ERROR_CATCH", payload: false})
        dispatch({type: "SET_LOAD", payload: true})
        dispatch({type: "LOADED_CHART", payload: false})
        dispatch(fetchForecast(input))
    }

    return(
        <form>
            <input 
                type="text"
                className="search-form__input"
                placeholder="Input your city"
                onChange={handleChange} 
            /><br/>
            <button
                className="search-form__button"
                type="submit"
                onClick={getForecast}
                disabled={input === ''}
            >
                Search
            </button>
        </form>
    )
}