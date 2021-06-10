import React from 'react'
import { useSelector } from 'react-redux'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

export default function BarChartComponent() {
    const forecastData = useSelector(state => state.forecastData)

    return (
        <div className="main-chart">
            <BarChart
                width={1100}
                height={300}
                data={forecastData}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="max" fill="#8884d8" />
                <Bar dataKey="min" fill="#82ca9d" />
                <Bar dataKey="cur" fill="#fff" />
            </BarChart>
        </div>
    )
}