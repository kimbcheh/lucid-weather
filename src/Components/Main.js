import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import ErrorMessage from './ErrorMessage'
import SearchBar from './SearchBar'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import '../styles/styles.css'
import fetchLocation from '../services/FetchLocation'
import fetchWeather from '../services/FetchWeather'

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
     const coordinatesData = await fetchLocation(city)
     const lon = coordinatesData.data[0].lon
     const lat = coordinatesData.data[0].lat

     const weatherData = await fetchWeather(lat, lon)
     setData(weatherData.data)
     console.log(weatherData.data)
     document.body.classList.remove(...document.body.classList)
     document.body.classList.add(
      `bg${weatherData.data.current.weather[0].icon}`
     )
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
  <div className='cont cont--flex-column cont--main'>
   <SearchBar onSearch={setCity} />
   {isError && <ErrorMessage />}
   {isLoading && <div className='spinner' />}
   <div className='cont cont--align-center cont--flex-column'>
    {safeRender && <CurrentWeather data={data} city={city} />}
    {safeRender && <ForecastWeather data={data} />}
   </div>
  </div>
 )
}

export default Main
