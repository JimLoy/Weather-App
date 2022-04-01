export default async function fetchData(path) {
  const r = await fetch(path);
  const resource = await r.json();
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
}

/*
export default  function fetchData(path) {
  const city = fetch(path)
    .then(r => r.json())
    .then(rj => ({
      min: Math.round(rj.main.temp_min),
      max: Math.round(rj.main.temp_max),
      feels: Math.round(rj.main.feels_like),
      humidity: rj.main.humidity,
      img: rj.weather[0].icon,
      id: rj.id,
      wind: rj.wind.speed,
      temp: Math.round(rj.main.temp),
      name: rj.name,
      country: rj.sys.country,
      latitude: rj.coord.lat,
      longitude: rj.coord.lon,
    })
    )
    .catch(err => err);
  return city
}
*/