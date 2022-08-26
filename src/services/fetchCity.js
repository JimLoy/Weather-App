const fetchData = require("./fetch");
require('dotenv').config()

function fetchCity(req,res) {
  const city = req.query.city    
  fetchData(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.APIKEY}&units=metric`
  ).then(cityData => {
    if (cityData) return res.json(cityData);
    else res.json({err: cityData});
  }).catch(err => console.error(err))
}

module.exports = fetchCity;