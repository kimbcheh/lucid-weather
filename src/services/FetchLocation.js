import axios from 'axios'

const key = process.env.REACT_APP_WEATHER_API_KEY

const fetchLocation = (city) => {
 return axios.get(
  `https://api.openweathermap.org/geo/1.0/direct?q=${city},AU&limit=1&appid=${key}`,
  { timeout: 5000 }
 )
}

export default fetchLocation
