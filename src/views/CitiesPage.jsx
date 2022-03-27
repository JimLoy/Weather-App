import React from "react";
//import Card from "../components/Card.jsx";
//import Cards from "../components/Cards.jsx";
import SearchBar from "../components/SearchBar.jsx";

import styles from "../styles/CitiesPage.module.css"; 

function CitiesPage({ data, handleOnClose, onSearch }) {
  return (
    <>
      <div className={styles.citiesContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}

export default CitiesPage;
