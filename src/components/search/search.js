import React from 'react'
import SearchComponent from './searchComponent'

export default function Search() {
    return(
        <section className="search">
            <div className="container">
                <div className="search-text">
                    <h1 className="search-text__title">
                        You want to know forecast? <br/> Search now for Your city
                    </h1>
                </div>
                <div className="search-form">
                    <SearchComponent />
                </div>
            </div>
        </section>
    )
}