import React from "react";
import styles from "../styles/WeatherData.module.css"
import Temp from "../components/Temp"


export default function WeatherData({ city }) {
  return(
    <div className={styles.weatherDataContainer}>
      <div className={styles.card}>
        <div className={styles.nameImgContainer}>
          <h1 className={styles.name}>{city.name}, {city.country}</h1>
          <img
            src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
            alt="Weather icon"
            className={styles.image}
          />
        </div>
        <div className={styles.temps}>
          <Temp label="Temp" temp={city.temp} icon={"º"}/>
          <Temp label="Min" temp={city.min} icon={"º"}/>
          <Temp label="Max" temp={city.max} icon={"º"}/>
          <Temp label="Feeling" temp={city.feels} icon={"º"}/>
          <Temp label="Humidity" temp={city.humidity} icon={"%"}/>
          <Temp label="Wind" temp={city.wind} icon={"km/h"}/>
        </div>
      </div>
    </div>
  )
}