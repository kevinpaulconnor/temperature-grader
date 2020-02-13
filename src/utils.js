export const UNITS = {
    "CELSIUS": "CELSIUS",
    "KELVIN": "KELVIN",
    "RANKINE": "RANKINE",
    "FAHRENHEIT": "FAHRENHEIT"
}

export const RESULTS = {
    "CORRECT": "CORRECT",
    "INCORRECT": "INCORRECT",
    "INVALID": "INVALID",
    "NOTCALCULATED": "NOTCALCULATED"
}

// we know we have rounded the inputs to ones, and know that the
// conversion formulas go to two decimal digits at most.
// therefore we should be safe to multiply without running
// into floating point precision errors,
// as these constants will be the only floats
const fiveNinths = 5 / 9;
const nineFifths = 9 / 5;
const conversionFxns = {
    "CELSIUS": {
        "FAHRENHEIT": (value) =>{
            return (nineFifths*value) + 3200
        },
        "KELVIN": (value) => {
            return value + 27315
        },
        "RANKINE": (value) => {
            return (value + 27315) * nineFifths
        }
    },
    "FAHRENHEIT": {
        "CELSIUS": (value) =>{
            return (value-3200) * fiveNinths
        },
        "KELVIN": (value) => {
            return (value + 45967) * fiveNinths
        },
        "RANKINE": (value) => {
            return (value + 45967)
        }
    },
    "KELVIN": {
        "FAHRENHEIT": (value) =>{
            return (value * nineFifths) - 45967
        },
        "CELSIUS": (value) => {
            return value - 27315
        },
        "RANKINE": (value) => {
            return value * nineFifths
        }
    },
    "RANKINE": {
        "FAHRENHEIT": (value) =>{
            return value - 45967
        },
        "CELSIUS": (value) => {
            return (value - 49167) * fiveNinths
        },
        "KELVIN": (value) => {
            return value * fiveNinths
        }
    },
    
}

function calculateConversion(inputUnit, input, targetUnit, roundedTarget) {
    let result = conversionFxns[inputUnit][targetUnit](input*100);
    result = roundToOnes(result / 100);
    if (((result - 1) <= roundedTarget) &&
        (roundedTarget <= (result + 1))) {
        return RESULTS.CORRECT;
    }
    return RESULTS.INCORRECT;
}

function roundToOnes(value) {
    let result = value.toFixed(0);
    // per the sample results in the spec, .5 should round down,
    // but toFixed rounds it up
    // so we need a special case
    let splitString = value.toString().split('.');
    if ((splitString[1] - 5) === 0) {
        result--;
    }
    return Number(result);
}

export function convertTemperature(inputUnit, input, targetUnit, target) {   
    if (arguments.length !== 4) {
        return RESULTS.INVALID;
    }
    if (UNITS[inputUnit] === undefined || UNITS[targetUnit] === undefined) {
        return RESULTS.INVALID;
    }
    if (typeof(input) !== "number") {
        return RESULTS.INVALID;
    }
    if (typeof(target) !== "number") {
        return RESULTS.INCORRECT;
    }

    let roundedTarget = roundToOnes(target);
    return calculateConversion(inputUnit, input, targetUnit, roundedTarget);
}