import React from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import styles from "../styles/SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const [search, setSearch] = React.useState("");

  const handleOnSearch = () => {
    // const input = document.getElementById("searchInput");
    // onSearch(input.value);
    // input.value = "";
    onSearch(search);
    setSearch("");
  };

  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        id="searchInput"
        placeholder="Type city name"
        autoComplete="off"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") handleOnSearch();
        }}
      />
      <button className={styles.button} onClick={handleOnSearch}>
        <IoChevronForwardSharp />
      </button>
    </div>
  );
}
