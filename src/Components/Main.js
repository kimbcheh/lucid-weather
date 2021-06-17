import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import { CircularProgress } from '@material-ui/core'

const key = process.env.REACT_APP_WEATHER_API_KEY

function Main() {
 const [city, setCity] = useState('Melbourne')
 const [data, setData] = useState()
 const [isLoading, setIsLoading] = useState(false)

 useEffect(() => {
  setIsLoading(true)
  console.log('loading')
  const fetchData = async () => {
   const coordinatesData = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},AU&limit=1&appid=${key}`
   )
   const lon = coordinatesData.data[0].lon
   const lat = coordinatesData.data[0].lat

   const weatherData = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${key}`
   )
   setData(weatherData.data)
   console.log(weatherData.data)
   setIsLoading(false)
   console.log('not loading')
  }
  fetchData()
 }, [city])

 return (
  <div>
   <SearchBar onSearch={setCity} />
   {isLoading && <CircularProgress color='primary' />}
   {!isLoading && data && <CurrentWeather data={data} city={city} />}
   {!isLoading && data && <ForecastWeather data={data} />}
  </div>
 )
}

export default Main
