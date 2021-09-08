import './input.scss';
import { gatherInfo, Weather } from './weather';
import { gatherPicture, picture } from './unsplash';
import { changeExtra, changeImage, changeMain } from './domManipulation';
import { imperialToMetric, metricToImperial } from './units';

const getInfo = async (city) => {
  const info = await Weather(city);
  return info;
};

const getPicture = async (city) => {
  const pic = await picture(city);
  return pic;
};

const changeDisplay = async (city) => {
  const info = await getInfo(city);
  const picture = await getPicture(city);
  console.log(info);
  console.log(picture);
  changeMain(
    info.clouds,
    info.location,
    info.country,
    info.temperature,
    info.timeZone
  );
  changeExtra(info.feelsLike, info.humidity, info.windSpeed);
  changeImage(picture);
  imperialToMetric();
};

changeDisplay('Berlin');
