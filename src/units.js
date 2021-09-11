const imperialToMetric = () => {
  const temp = document.querySelector('.temperature');
  let tempValue = ((Number(temp.textContent.slice(0, -2)) - 32) * 5) / 9;
  temp.textContent = `${tempValue.toFixed(2)}°C`;

  const windSpeed = document.querySelector('.wind .value');
  const windSpeedValue =
    (Number(windSpeed.textContent.slice(0, -5)) * 1609.34) / 60 / 60;
  windSpeed.textContent = `${windSpeedValue.toFixed(2)} m/s`;

  const feel = document.querySelector('.feels .value');
  let feelValue = ((Number(feel.textContent.slice(0, -2)) - 32) * 5) / 9;
  feel.textContent = `${feelValue.toFixed(2)}°C`;
};

const metricToImperial = () => {
  const temp = document.querySelector('.temperature');
  let tempValue = (Number(temp.textContent.slice(0, -2)) * 9) / 5 + 32;
  temp.textContent = `${tempValue.toFixed(2)}°F`;

  const windSpeed = document.querySelector('.wind .value');
  const windSpeedValue =
    (Number(windSpeed.textContent.slice(0, -3)) / 1609.34) * 60 * 60;
  windSpeed.textContent = `${windSpeedValue.toFixed(2)} mi/hr`;

  const feel = document.querySelector('.feels .value');
  let feelValue = (Number(feel.textContent.slice(0, -2)) * 9) / 5 + 32;
  feel.textContent = `${feelValue.toFixed(2)}°F`;
};

export { metricToImperial, imperialToMetric };
