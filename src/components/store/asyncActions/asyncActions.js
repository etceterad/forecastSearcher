import TestApi from '../../../services'

export const fetchForecast = (input) => {
    return (dispatch) => {
        TestApi.getForecast(input)
            .then(res => {
                dispatch({type: "GET_CITY", payload: res.city.name})
                dispatch({type: "ERROR_CATCH", payload: false})
                dispatch({type: "SET_LOAD", payload: false})
                dispatch({type: "LOADED_CHART", payload: true})
                return res.list
            })
            .then((res) => {
                dispatch({type: "GET_FORECAST", payload: res})

                const data = res.map(item => {
                    const { dt, main } = item
                    const { temp_max, temp_min, temp } = main

                    const date = new Date(dt)
            
                    return {
                        name: date.toLocaleString(),
                        max: Math.round(temp_max - 273),
                        min: Math.round(temp_min - 273),
                        cur: Math.round(temp - 273),
                    }
                })    
                dispatch({type: "MAP_FORECAST", payload: data})
            })
            .catch(() => {
                dispatch({type: "ERROR_CATCH", payload: true})
                dispatch({type: "SET_LOAD", payload: false})
            })
    }
}