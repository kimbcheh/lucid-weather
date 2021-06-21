import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import CurrentWeather from './CurrentWeather'
import ForecastWeather from './ForecastWeather'
import styled from 'styled-components'

const key = process.env.REACT_APP_WEATHER_API_KEY

const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100vh;
`

const DataContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 @media (min-width: 1280px) {
  /* align-items: center; */
 }
`

const Spinner = styled.div`
 border: 4px solid #f3f3f3;
 border-radius: 50%;
 border-top: 4px solid #000;
 width: 40px;
 height: 40px;
 animation: spin 2s linear infinite;
 top: 50%;
 right: 50%;
 margin-top: -20px;
 margin-right: -20px;
 position: fixed;
 @keyframes spin {
  0% {
   transform: rotate(0deg);
  }
  100% {
   transform: rotate(360deg);
  }
 }
`

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
  <MainContainer>
   <SearchBar onSearch={setCity} />
   {isError && <p>Sorry, something went wrong!</p>}
   {isLoading && <Spinner />}
   <DataContainer>
    {safeRender && <CurrentWeather data={data} />}
    {safeRender && <ForecastWeather data={data} />}
   </DataContainer>
  </MainContainer>
 )
}

export default Main
