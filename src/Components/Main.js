import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import { CircularProgress } from '@material-ui/core'

const key = process.env.REACT_APP_WEATHER_API_KEY

function Main() {
 const [city, setCity] = useState()
 const [data, setData] = useState()
 const [isLoading, setIsLoading] = useState(false)
 const [isError, setIsError] = useState(false)

 const initialRender = useRef(true)

 useEffect(() => {
  const fetchData = async () => {
   if (initialRender.current) {
    initialRender.current = false
   } else {
    setIsLoading(true)
    setIsError(false)
    try {
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
    } catch (error) {
     setIsError(true)
     console.error(error)
    }
    setIsLoading(false)
   }
  }
  fetchData()
 }, [city])

 const safeRender = !isLoading && !isError && data

 return (
  <div>
   <SearchBar onSearch={setCity} />
   {isError && <p>Sorry, something went wrong!</p>}
   {isLoading && <CircularProgress color='primary' />}
   {safeRender && <CurrentWeather data={data} />}
   {safeRender && <ForecastWeather data={data} />}
  </div>
 )
}

export default Main
