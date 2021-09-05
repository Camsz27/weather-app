//require('dotenv-webpack').config();
//const key = process.env.API_KEY_WEATHER;

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
    let temperature = data.main.temp;
    let feelsLike = data.main.feels_like;
    let humidity = data.main.humidity;
    let clouds = data.weather[0].description;
    let cloudsIcon = data.weather[0].icon;
    let windSpeed = data.wind.speed;

    return {
      location,
      country,
      temperature,
      feelsLike,
      humidity,
      clouds,
      cloudsIcon,
      windSpeed,
    };
  } catch (error) {
    return 'City was not found';
  }
};

async function gatherInfo(city) {
  let info = await Weather(city);
  console.log(info);
}

export { gatherInfo };
