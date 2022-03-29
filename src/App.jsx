import React from "react";
import fetchCity from "./services/fetchCity";
//import fetchCoords from "./services/fetchCoords.js";
import SearchBarContainer from "./views/SearchBarContainer";
import WeatherData from "./views/WeatherData";
import styles from "./styles/App.module.css";

export default function App() {
  const [data, setData] = React.useState(false);

  function onSearch(ciudad) {
    fetchCity(ciudad, setData);
  }

/*React.useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((pos) => {
        fetchCoords(pos.coords.latitude, pos.coords.longitude, setData);
      });
  }, []); */

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        {
          data === false ? "" : data !== null ? <WeatherData city={data}/> : <h1>City not found</h1>
        }
        <SearchBarContainer onSearch={onSearch}/>
      </div>
    </div>
  );
}


