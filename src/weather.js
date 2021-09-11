const key = '70070eb1a20a2232bd83f25cecb92701';

const Weather = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`,
      { mode: 'cors' }
    );
    const data = await response.json();
    let location = data.name;
    let country = data.sys.country;
    let temperature = (data.main.temp - 273.15).toFixed(2);
    let feelsLike = (data.main.feels_like - 273.15).toFixed(2);
    let humidity = data.main.humidity;
    let clouds = data.weather[0].description;
    let cloudsIcon = data.weather[0].icon;
    let windSpeed = data.wind.speed;
    let timeZone = data.timezone;
    return {
      location,
      country,
      temperature,
      feelsLike,
      humidity,
      clouds,
      cloudsIcon,
      windSpeed,
      timeZone,
    };
  } catch (error) {
    return 'City was not found';
  }
};

export { Weather };
