import fetchData from "./fetch";

const apiKey = process.env.REACT_APP_APIKEY;

export default function fetchCity(city, setData) {   
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  ).then(cityData => {
    if (cityData) setData(cityData);
    else setData(null);
  });
}
