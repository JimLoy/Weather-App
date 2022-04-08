const axios = require('axios');

async function fetchData(path) {
  try{
    let resource = await axios(path);
    resource = resource.data
    let city;
    if (resource.main !== undefined) {
      city = {
        min: Math.round(resource.main.temp_min),
        max: Math.round(resource.main.temp_max),
        feels: Math.round(resource.main.feels_like),
        humidity: resource.main.humidity,
        img: resource.weather[0].icon,
        id: resource.id,
        wind: resource.wind.speed,
        temp: Math.round(resource.main.temp),
        name: resource.name,
        country: resource.sys.country,
        latitude: resource.coord.lat,
        longitude: resource.coord.lon,
      };
    }
    return city;
  } catch(err) { return {err} }
}

module.exports = fetchData;