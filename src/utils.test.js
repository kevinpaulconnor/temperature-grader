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
});

it ('handles zero, which can be weird, and should also give us some reasonable expected correct case coverage', () => {
    expect(convertTemperature(UNITS.FAHRENHEIT, 0, UNITS.CELSIUS, -18)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.FAHRENHEIT, 0, UNITS.KELVIN, 255)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.FAHRENHEIT, 0, UNITS.RANKINE, 460)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.CELSIUS, 0, UNITS.FAHRENHEIT, 32)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.CELSIUS, 0, UNITS.KELVIN, 273)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.CELSIUS, 0, UNITS.RANKINE, 492)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.KELVIN, 0, UNITS.FAHRENHEIT, -460)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.KELVIN, 0, UNITS.CELSIUS, -273)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.KELVIN, 0, UNITS.RANKINE, 0)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.RANKINE, 0, UNITS.FAHRENHEIT, -460)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.RANKINE, 0, UNITS.KELVIN, 0)).toEqual(RESULTS.CORRECT);
    expect(convertTemperature(UNITS.RANKINE, 0, UNITS.CELSIUS, -273)).toEqual(RESULTS.CORRECT);//expect(convertTemperature(UNITS.CELSIUS, -45.14, UNITS.KELVIN, 227.51)).toEqual(RESULTS.CORRECT);
});

it ('should return invalid on NaN input', () => {
    expect(convertTemperature(UNITS.CELSIUS, Number("cat"), UNITS.KELVIN, 1)).toEqual(RESULTS.INVALID);
});

// fuzz tests would be interesting to add for this method