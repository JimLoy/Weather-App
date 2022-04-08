import React from "react";
import SearchBarContainer from "./views/SearchBarContainer";
import WeatherData from "./views/WeatherData";
import axios from "axios";
import styles from "./styles/App.module.css";

export default function App() {
  const [data, setData] = React.useState(false);

  async function onSearch(city) {
    try{
      const apiData = await axios(`http://localhost:3001/?city=${city}`);
      setData(apiData.data)
    } catch(err) {
      setData(null)
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        {
          data === false ? "" : data !== null && data.err === undefined 
            ? <WeatherData city={data}/> 
            : <h1 className={styles.err}>City not found</h1>
        }
        <SearchBarContainer onSearch={onSearch}/>
      </div>
    </div>
  );
}


