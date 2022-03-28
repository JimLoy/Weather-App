import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Temp from "./Temp"
import styles from "../styles/Card.module.css";

export default function Card({ max, min, name, img, onClose, cityId }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{name}</h1>
      <button className={styles.button} onClick={onClose}>
        <IoCloseCircleOutline />
      </button>
      <img
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt="Icono del clima"
      />
      <div className={styles.temps}>
        <Temp label="Min" temp={min} />
        <Temp label="Max" temp={max} />
      </div>
    </div>
  );
}
