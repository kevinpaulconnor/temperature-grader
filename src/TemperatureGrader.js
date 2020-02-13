import React, { useState } from 'react';
import { UNITS, RESULTS} from './utils.js'

const TempOptions = () => {
    let options = [<option key="-1" value="-1">Please Choose a Temperature</option>];
    for (let unit of Object.keys(UNITS)) {
        options.push(<option key={unit} value={unit}>{unit}</option>);
    }
    return(
    <select>{options}</select>
    )
}

export const ConversionRow = () => {
    const [calculationResult, setCalculationResult] = useState(RESULTS.NOTCALCULATED);
    let displayResult = <span className="not-calculated">Not Calculated</span>
    return (
        <div className="conversionRow">
            <span><input placeholder="Input Temperature"></input></span>
            <span><TempOptions /></span>
            <span><TempOptions /></span>
            <span><input placeholder="Student Response"></input></span>
            <span><button>Calculate Row</button></span>
            {displayResult}
        </div>
    )
}

export const TemperatureGrader = () => {
    const [rowCount, setRowCount] = useState(5);
    let rows = [];
    for (let i=0; i<rowCount;i++) {
        rows.push(<ConversionRow key={i}/>);
    }

    return (
        <div className="temperature-grader">
            <h1>Kevin Connor's Temperature Grader</h1>
            <h3>Enter Your Temperature Data:</h3>
            <div className="temperature-grader">
            <div className="conversion-row-header">
                <h4>Input Value</h4>
                <h4>Input Units</h4>
                <h4>Target Units</h4>
                <h4>Student Response</h4>
                <h4></h4>
                <h4>Result</h4>
            </div>
            {rows}
            </div>
            <button>Add New Grading Row</button>
            <button>Clear All Row Values</button>
            <button>Clear All Rows</button>
        </div>
    );
}