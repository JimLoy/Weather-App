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
