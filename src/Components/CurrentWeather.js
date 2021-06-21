import { convertTime } from './DateFunctions'
import styled from 'styled-components'

const CurrentContainer = styled.div`
 background-color: salmon;
`

const CurrentTemp = styled.p`
 background-color: slategrey;
 font-size: 3rem;
`

const CurrentDesc = styled.p`
 background-color: violet;
 font-size: 2.25rem;
`

function CurrentWeather({ data }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <CurrentContainer>
   <CurrentTemp>{current.temp}°</CurrentTemp>
   <CurrentDesc>Enjoy your {current.weather[0].description} today.</CurrentDesc>
   <p>
    TEMP: ↑ {daily.temp.max}° ↓ {daily.temp.min}°
   </p>
   <p>
    RAIN: {daily.pop}% {daily.rain && `/ ${daily.rain}mm`}
   </p>
   <p>SUNRISE: {convertTime(current.sunrise)}</p>
   <p>SUNSET: {convertTime(current.sunset)}</p>
  </CurrentContainer>
 )
}

export default CurrentWeather
