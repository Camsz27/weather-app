import { imperialToMetric, metricToImperial } from './units';

const locationInput = () => {
  const input = document.querySelector('.location input');
  const location = input.value;
  input.value = '';
  return location;
};

const unitsInput = (e) => {
  const buttonC = document.querySelector('#celsius');
  const buttonF = document.querySelector('#fahrenheit');
  e.target.removeEventListener('click', unitsInput);
  if (e.target.id === 'fahrenheit') {
    metricToImperial();
    buttonC.addEventListener('click', unitsInput);
  }
  if (e.target.id === 'celsius') {
    imperialToMetric();
    buttonF.addEventListener('click', unitsInput);
  }
};

export { locationInput, unitsInput };
