import { convertDate } from './DateFunctions'
import styled from 'styled-components'

const ForecastContainer = styled.div`
 background-color: red;
 display: flex;
 flex-direction: column;
`

const DailyForecast = styled.div`
 background-color: green;
 display: flex;
 flex-direction: row;
 margin: 0.25rem;
`

const ForecastItem = styled.p`
 background-color: blueviolet;
 flex-grow: 1;
 flex-shrink: 1;
 flex-basis: 0;
 margin: 0;
`

const ForecastDate = styled.p`
 background-color: brown;
 flex-grow: 2;
 flex-shrink: 1;
 flex-basis: 0;
 margin: 0;
`

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <ForecastContainer>
   {forecastArr.map((day) => {
    return (
     <DailyForecast key={day.dt}>
      <ForecastDate>{convertDate(day.dt).toUpperCase()}</ForecastDate>
      <ForecastItem>↑ {day.temp.max}</ForecastItem>
      <ForecastItem>↓ {day.temp.min}</ForecastItem>
      {/* <ForecastItem>{day.weather[0].description.toUpperCase()}</ForecastItem> */}
     </DailyForecast>
    )
   })}
  </ForecastContainer>
 )
}

export default ForecastWeather
