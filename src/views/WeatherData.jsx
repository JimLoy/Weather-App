import React from "react";
import Card from "../components/Card";
import styles from "../styles/WeatherData.module.css"

export default function WeatherData({ city }) {
  return(
    <div className={styles.weatherDataContainer}>
      <Card 
      max={city.max} 
      min={city.min} 
      name={city.name} 
      img={city.img}
      />
    </div>
  )
}