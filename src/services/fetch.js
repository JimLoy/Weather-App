export default async function fetchData(path) {
  const r = await fetch(path);
  const resource = await r.json();
  let city;
  if (resource.main !== undefined) {
    city = {
      min: Math.round(resource.main.temp_min),
      max: Math.round(resource.main.temp_max),
      img: resource.weather[0].icon,
      id: resource.id,
      wind: resource.wind.speed,
      temp: resource.main.temp,
      name: resource.name,
      weather: resource.weather[0].main,
      clouds: resource.clouds.all,
      latitude: resource.coord.lat,
      longitude: resource.coord.lon,
    };
  }
  return city;
}
