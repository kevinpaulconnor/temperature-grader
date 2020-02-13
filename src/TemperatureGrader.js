import React, { useState } from 'react';

export const ConversionRow = () => {
    return (
        <div className="conversionRow">
            conversion row
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
        <div>
            <h1>Kevin Connor's Temperature Grader</h1>
            <h2>A Temperature Grader</h2>
            <div className="temperature-grader">
            {rows}
            </div>
            <button>Add New Grading Row</button>
            <button>Clear All Row Values</button>
            <button>Clear All Rows</button>
        </div>
    );
}