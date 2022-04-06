import React from "react";
import SearchBar from "../components/SearchBar.jsx";
import styles from "../styles/SearchBarContainer.module.css"; 

export default function SearchBarContainer({ onSearch }) {
  return (
    <>
      <div className={styles.SearchBarContainer}>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}


