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
`

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <ForecastContainer>
   {forecastArr.map((day) => {
    return (
     <DailyForecast key={day.dt}>
      <p>{convertDate(day.dt).toUpperCase()}</p>
      <p>↑ {day.temp.max}</p>
      <p>↓ {day.temp.min}</p>
      <p>{day.weather[0].description.toUpperCase()}</p>
     </DailyForecast>
    )
   })}
  </ForecastContainer>
 )
}

export default ForecastWeather
