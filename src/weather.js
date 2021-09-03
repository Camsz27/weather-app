let city = 'New York';

const Weather = async function weatherInfo() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=70070eb1a20a2232bd83f25cecb92701`,
    { mode: 'cors' }
  );
  console.log(response);
  const data = await response.json();
  console.log(data);

  let location = data.name;
  console.log(`The city is ${location}`);

  let country = data.sys.country;
  console.log(`The country is ${country}`);

  let temperature = data.main.temp;
  console.log(`The temperature is ${temperature}`);

  let feelsLike = data.main.feels_like;
  console.log(`It feels like it is ${feelsLike}`);

  let humidity = data.main.humidity;
  console.log(`The humidity is ${humidity}`);

  let clouds = data.weather[0].description;
  console.log(`The clouds is ${clouds}`);

  let cloudsIcon = data.weather[0].icon;
  console.log(
    `The clouds icon url is http://openweathermap.org/img/wn/${cloudsIcon}@2x.png`
  );

  let windSpeed = data.wind.speed;
  console.log(`The wind speed is ${windSpeed}`);

  return {
    location: location,
    country: country,
    temperature: temperature,
    feelsLike: feelsLike,
    humidity: humidity,
    clouds: clouds,
    cloudsIcon: cloudsIcon,
  };
};

export default Weather();
