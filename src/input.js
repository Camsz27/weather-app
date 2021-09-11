import { imperialToMetric, metricToImperial } from './units';

const locationInput = () => {
  const input = document.querySelector('.location input');
  const location = input.value;
  input.value = '';
  return location;
};

const unitsInput = (e) => {
  if (e.target.id === 'fahrenheit') {
    metricToImperial();
  }
  if (e.target.id === 'celsius') {
    imperialToMetric();
  }
};

export { locationInput, unitsInput };
