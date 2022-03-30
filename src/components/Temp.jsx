import React from "react";
import styles from "../styles/WeatherData.module.css";

export default function Temp({ label, temp, icon }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}{icon}</span>
    </div>
  );
}