import React from 'react'
import SpinnerImg from '../../assets/spinner.svg'

export default function Spinner() {
    return(
        <div className="main-spinner text-center">
            <img src={SpinnerImg} alt="spinner" />
        </div>
    )
}