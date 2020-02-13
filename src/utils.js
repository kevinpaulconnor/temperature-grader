export const UNITS = {
    "CELSIUS": "CELSIUS",
    "KELVIN": "KELVIN",
    "RANKINE": "RANKINE",
    "FAHRENHEIT": "FAHRENHEIT"
}

export const RESULTS = {
    "CORRECT": "CORRECT",
    "INCORRECT": "INCORRECT",
    "INVALID": "INVALID"
}

export function convertTemperature(inputUnit, input, targetUnit, target) {
    if (arguments.length !== 3) {
        return RESULTS.INVALID;
    }
    if (UNITS[inputUnit] === undefined || UNITS[targetUnit] === undefined) {
        return RESULTS.INVALID;
    }
    if (typeof(input) !== "number" || typeof(target) !== "number") {
        return RESULTS.INVALID
    }


}