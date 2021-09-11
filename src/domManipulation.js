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
  const localDate = new Date(
    date.getTime() + time * 1000 + date.getTimezoneOffset() * 60 * 1000
  );
  const dateDisplay = document.querySelector('.date');
  dateDisplay.textContent = localDate.toLocaleDateString(undefined, {
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
  }).format(localDate);
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
