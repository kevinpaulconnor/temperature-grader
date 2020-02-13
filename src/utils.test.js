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
    expect(convertTemperature(UNITS.CELSIUS, 1, UNITS.KELVIN, "2")).toEqual(RESULTS.INVALID);
});