import React from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Temp from "./Temp"
import styles from "../styles/Card.module.css";

export default function Card(props) {
  const { max, min, name, img, onClose, primary, cityId } = props;
  // acá va tu código
  return (
    <div className={`${styles.card} ${primary ? styles.primary : ""}`}>
      <Link to={`/city/${cityId}`} className={styles.name}>
        {name}
      </Link>
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
