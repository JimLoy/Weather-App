import fetchData from "./fetch";
//require('dotenv').config()

//const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCity(city, setData) {   //&appid=${apiKey}
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`
  ).then(cityData => {
    if (cityData) setData(cityData);
    else setData(null);
  });
}
