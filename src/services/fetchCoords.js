import fetchData from "./fetch";
require('dotenv').config()

const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCoords(lat, lon, setData) {
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
  ).then((cityData) => {
    if (cityData) setData(cityData);
    else setData(null);
  });
}
