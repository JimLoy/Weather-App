import React from "react";
import styles from "../styles/Card.module.css";

export default function Temp({ label, temp }) {
  return (
    <div className={styles.temp}>
      <span>{label}</span>
      <span>{temp}º</span>
    </div>
  );
}