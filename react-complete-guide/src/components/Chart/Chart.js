import React from "react";
import ChartBar from './ChartBar'

import './Chart.css'

const Chart = props => {

    const dataPoints = props.dataPoints.map(dataPoint => dataPoint.value)

    const totalMaxValue = Math.max(...dataPoints)

    return (

        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaxValue}
                    label={dataPoint.label} />)}
        </div>
    )
}

export default Chart;