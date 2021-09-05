const main = document.querySelector('.main');

const changeMain = (cloudStatus, city, country, temp, day) => {
  const clouds = document.querySelector('.clouds');
  clouds.textContent = cloudStatus;

  const location = document.querySelector('.locationInfo');
  location.textContent = `${city}, ${country}`;

  const temperature = document.querySelector('.temperature');
  temperature.textContent = temp;

  const date = document.querySelector('.date');
  date.textContent = day;
};

const changeExtra = (feels, humidity, windSpeed) => {
  const feelsLike = document.querySelector('.feels .value');
  feelsLike.textContent = feels;

  const humidityValue = document.querySelector('.humidity .value');
  humidityValue.textContent = humidity;

  const windSpeedValue = document.querySelector('.wind .value');
  windSpeedValue.textContent = windSpeed;
};

export { changeMain, changeExtra };
