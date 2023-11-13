// https://openweathermap.org/current
import { fetchWeatherByCityName } from './weatherApi.js';
import { createWeatherCard } from './templates/weather-card.js';

const weatherFormEl = document.querySelector('.js-search-form');
const outputWeatherEl = document.querySelector('.js-weather__wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(
    2,
    '0'
  )}`;
};

const onWeatherFormElSubmit = event => {
  event.preventDefault();

  const { target: weatherFormEl } = event;

  const searchQuery = weatherFormEl.elements.user_country.value;

  fetchWeatherByCityName(searchQuery)
    .then(data => {
      data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
      data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);

      outputWeatherEl.innerHTML = createWeatherCard(data);
    })
    .catch(err => {
      if (err.message === '404') {
        alert('Міста не знайдено!');

        weatherFormEl.reset();
      }
    });
};

weatherFormEl.addEventListener('submit', onWeatherFormElSubmit);
