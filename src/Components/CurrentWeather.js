import { convertTime } from './DateFunctions'
import styled from 'styled-components'

const CurrentContainer = styled.div`
 /* background-color: salmon; */
 padding-bottom: 1rem;
 padding-top: 1rem;
 /* border-top: 1px solid black; */
 border-bottom: 1px solid black;
`

const CurrentTemp = styled.p`
 /* background-color: slategrey; */
 font-size: 3rem;
 margin: 0.25rem;
`

const CurrentDesc = styled.p`
 /* background-color: violet; */
 font-size: 2.25rem;
 margin: 0.25rem;
`

const CurrentItem = styled.p`
 /* background-color: powderblue; */
 margin: 0.25rem;
`

const Heading = styled.h2`
 /* background-color: pink; */
 font-size: 1rem;
 margin: 0.25rem;
 text-decoration: underline;
`

function CurrentWeather({ data }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <CurrentContainer>
   <Heading>CURRENTLY:</Heading>
   <CurrentTemp>{current.temp}°</CurrentTemp>
   <CurrentDesc>Enjoy your {current.weather[0].description} today.</CurrentDesc>
   <CurrentItem>
    TEMP: ↑ {daily.temp.max}° ↓ {daily.temp.min}°
   </CurrentItem>
   <CurrentItem>
    RAIN: {daily.pop}% {daily.rain && `/ ${daily.rain}mm`}
   </CurrentItem>
   <CurrentItem>SUNRISE: {convertTime(current.sunrise)}</CurrentItem>
   <CurrentItem>SUNSET: {convertTime(current.sunset)}</CurrentItem>
  </CurrentContainer>
 )
}

export default CurrentWeather
