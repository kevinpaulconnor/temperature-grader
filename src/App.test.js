import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {TemperatureGrader, ConversionRow} from './TemperatureGrader';

test('App renders without crashing', () => {
  render(<App />);
});

test('TemperatureGrader renders without crashing', () => {
  render(<TemperatureGrader />);
});

test('ConversionRow renders without crashing', () => {
  render(<ConversionRow />);
});


