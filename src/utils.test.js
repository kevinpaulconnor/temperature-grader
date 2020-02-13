import {UNITS, RESULTS, convertTemperature} from './utils';

// convert_temperature
it('requires exactly four arguments', () => {
    expect(convertTemperature()).toEqual(RESULTS.INVALID);
    expect(convertTemperature(UNITS.CELSIUS)).toEqual(RESULTS.INVALID);
    expect(convertTemperature(UNITS.CELSIUS, 1)).toEqual(RESULTS.INVALID);
    expect(convertTemperature(UNITS.CELSIUS, 1, UNITS.KELVIN)).toEqual(RESULTS.INVALID);
    expect(convertTemperature(UNITS.CELSIUS, 1, UNITS.KELVIN, 2, 'a')).toEqual(RESULTS.INVALID);
});

it('does not accept invalid units', () => {
    expect(convertTemperature('badUnit', 1, UNITS.CELSIUS, 2)).toEqual(RESULTS.INVALID);
    expect(convertTemperature(UNITS.CELSIUS, 1, 'badUnit', 2)).toEqual(RESULTS.INVALID);
    expect(convertTemperature(UNITS.CELSIUS, "1", UNITS.KELVIN, 2)).toEqual(RESULTS.INVALID);
});

it('marks non-number student input as incorrect', () => {
    expect(convertTemperature(UNITS.CELSIUS, 1, UNITS.KELVIN, "cat")).toEqual(RESULTS.INCORRECT);
});

it ('handles the example scenarios', () => {
    expect(convertTemperature(UNITS.FAHRENHEIT, 84.2, UNITS.RANKINE, 543.5)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.CELSIUS, -45.14, UNITS.KELVIN, 227.51)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.KELVIN, 317.33, UNITS.FAHRENHEIT, 110.5)).toEqual(RESULTS.INCORRECT);
    expect(convertTemperature(UNITS.RANKINE, 444.5, UNITS.CELSIUS, -30.9)).toEqual(RESULTS.INCORRECT);
    expect(convertTemperature(UNITS.FAHRENHEIT, 6.5, UNITS.RANKINE, "cat")).toEqual(RESULTS.INCORRECT);
    expect(convertTemperature("bird", "", UNITS.CELSIUS, 45.32)).toEqual(RESULTS.INVALID);
})