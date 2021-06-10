import React from 'react'
import { useSelector } from 'react-redux'
import BarChartComponent from './barChart'
import Spinner from '../spinner'

export default function Chart() {
    const cityName = useSelector(state => state.cityName)
    const error = useSelector(state => state.reqError)
    const onLoad = useSelector(state => state.onLoad)
    const loaded = useSelector(state => state.loaded)

    const ShowError = error ? <ErrorMessage /> : null
    const SpinnerBlock = onLoad ? <Spinner /> : null
    const BarChart = loaded ? <BarChartComponent /> : null
    
    return(
        <div className="container">
            <div className="main-chart__title text-center">
                <h3>{cityName}</h3>
            </div>
            {ShowError}
            {SpinnerBlock}
            {BarChart}
        </div>
    )
}

const ErrorMessage = () => {
    return(
        <div className="text-center">
            <h2 style={{marginTop: "30px", fontWeight: "700"}}>City Not Found</h2>
        </div>
    )
}