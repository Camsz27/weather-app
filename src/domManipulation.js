const main = document.querySelector('.main');

const changeMain = (cloudStatus, city, country, temp, time) => {
  const clouds = document.querySelector('.clouds');
  clouds.textContent =
    cloudStatus.charAt(0).toUpperCase() + cloudStatus.slice(1);

  const location = document.querySelector('.locationInfo');
  location.textContent = `${city}, ${country}`;

  const temperature = document.querySelector('.temperature');
  temperature.textContent = `${temp}°C`;

  const date = new Date();
  const dateDisplay = document.querySelector('.date');
  dateDisplay.textContent = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    time: 'long',
  });
  const timeDisplay = document.querySelector('.time');
  timeDisplay.textContent = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: 'America/New_York',
  }).format(date);
};

const changeExtra = (feels, humidity, windSpeed) => {
  const feelsLike = document.querySelector('.feels .value');
  feelsLike.textContent = `${feels}°C`;

  const humidityValue = document.querySelector('.humidity .value');
  humidityValue.textContent = `${humidity}%`;

  const windSpeedValue = document.querySelector('.wind .value');
  windSpeedValue.textContent = `${windSpeed}m/s`;
};

const changeImage = (url) => {
  const backgroundImage = document.querySelector('.main');
  backgroundImage.style.background = `no-repeat center/100% url('${url}&w=1600&dpr=2')`;
};

export { changeMain, changeExtra, changeImage };
