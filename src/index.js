import './input.scss';
import { Weather } from './weather';
import { picture } from './unsplash';
import { changeExtra, changeImage, changeMain } from './domManipulation';
import { locationInput, unitsInput } from './input';

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
  changeMain(
    info.clouds,
    info.location,
    info.country,
    info.temperature,
    info.timeZone
  );
  changeExtra(info.feelsLike, info.humidity, info.windSpeed);
  changeImage(picture);
};

const newLocation = () => {
  changeDisplay(locationInput());
};

const location = document.querySelector('.location button');
location.addEventListener('click', newLocation);

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach((radioButton) =>
  radioButton.addEventListener('click', unitsInput)
);

changeDisplay('Miami');
