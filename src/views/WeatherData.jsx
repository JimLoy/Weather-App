import React from "react";
import styles from "../styles/WeatherData.module.css"
import Temp from "../components/Temp"
import stylesCard from "../styles/Card.module.css";

export default function WeatherData({ city }) {
  return(
    <div className={styles.weatherDataContainer}>
      <div className={stylesCard.card}>
        <h1 className={stylesCard.name}>{city.name}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
          alt="Icono del clima"
        />
        <div className={stylesCard.temps}>
          <Temp label="Min" temp={city.min} />
          <Temp label="Max" temp={city.max} />
        </div>
        <p>Feels like: {city.feels}º</p>
        <p>Humidity: {city.humidity}</p>
        <p>Wind: {city.wind}</p>
        <p>Temp: {city.temp}º</p>
        <p>Country: {city.country}</p>
        <p>Latitude: {city.latitude}</p>
        <p>Longitude: {city.longitude}</p>
      </div>
    </div>
  )
}