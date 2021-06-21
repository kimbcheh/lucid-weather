import { convertDate } from './DateFunctions'
import styled from 'styled-components'

const ForecastContainer = styled.div`
 /* background-color: red; */
 display: flex;
 flex-direction: column;
 padding-bottom: 1rem;
 padding-top: 1rem;
 /* border-top: 1px solid black; */
 border-bottom: 1px solid black;
 flex-grow: 1;
`

const DailyForecast = styled.div`
 /* background-color: green; */
 display: flex;
 flex-direction: row;
 margin: 0.25rem;
 max-width: 480px;
`

const ForecastItem = styled.p`
 /* background-color: blueviolet; */
 flex-grow: 1;
 flex-shrink: 1;
 flex-basis: 0;
 margin: 0;
`

const ForecastDate = styled.p`
 /* background-color: brown; */
 flex-grow: 2;
 flex-shrink: 1;
 flex-basis: 0;
 margin: 0;
`

const Heading = styled.h2`
 /* background-color: pink; */
 font-size: 0.8rem;
 margin: 0.25rem;
 text-decoration: underline;
`

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <ForecastContainer>
   <Heading>Forecast:</Heading>
   {forecastArr.map((day) => {
    return (
     <DailyForecast key={day.dt}>
      <ForecastDate>{convertDate(day.dt)}</ForecastDate>
      <ForecastItem>↑ {day.temp.max}°</ForecastItem>
      <ForecastItem>↓ {day.temp.min}°</ForecastItem>
      {/* <ForecastItem>{day.weather[0].description.toUpperCase()}</ForecastItem> */}
     </DailyForecast>
    )
   })}
  </ForecastContainer>
 )
}

export default ForecastWeather
