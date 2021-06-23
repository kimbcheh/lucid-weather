import axios from 'axios'

const key = process.env.REACT_APP_WEATHER_API_KEY

const fetchWeather = (lat, lon) => {
 return axios.get(
  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${key}`,
  { timeout: 5000 }
 )
}

export default fetchWeather
