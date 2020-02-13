import React, { useState } from 'react';
import { UNITS, RESULTS, convertTemperature} from './utils.js'

const TempOptions = (props) => {
    let options = [<option key="-1" value="-1">Please Choose a Temperature</option>];
    for (let unit of Object.keys(UNITS)) {
        options.push(<option key={unit} value={unit}>{unit}</option>);
    }
    return(
    <select className={props.optionClass}>{options}</select>
    )
}

export const ConversionRow = () => {
    const runTempConversion = (e) => {
        // pull input values and run the method
        const root = e.target.parentElement.parentElement;
        const input = root.getElementsByClassName("form_input")[0].value;
        const inputUnit= root.getElementsByClassName("form_inputUnit")[0].value;
        const targetUnit = root.getElementsByClassName("form_targetUnit")[0].value;
        const target = root.getElementsByClassName("form_target")[0].value;
        setCalculationResult(convertTemperature(inputUnit, Number(input),
            targetUnit, Number(target)));
    }

    const [calculationResult, setCalculationResult] = useState(RESULTS.NOTCALCULATED);
    let displayResult = '';
    switch (calculationResult) {
        case RESULTS.CORRECT:
            displayResult = (<span className="correct">Correct!</span>);
            break;
        case RESULTS.INCORRECT:
            displayResult = (<span className="incorrect">Incorrect!</span>);
            break;
        case RESULTS.INVALID:
            displayResult = (<span className="invalid">Invalid!</span>);
            break;
        default:
            displayResult = (<span className="not-calculated">Not Calculated</span>);   
    }
    return (
        <div className="conversionRow">
            <span><input className="form_input"placeholder="Input Temperature"></input></span>
            <span><TempOptions optionClass="form_inputUnit"/></span>
            <span><TempOptions optionClass="form_targetUnit" /></span>
            <span><input className="form_target" placeholder="Student Response"></input></span>
            <span><button onClick={runTempConversion}>Calculate Row</button></span>
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
            <button onClick={() => {setRowCount(rowCount + 1)}}>Add New Grading Row</button>
            <button onClick={() => {setRowCount(0)}}>Clear All Rows</button>
        </div>
    );
}