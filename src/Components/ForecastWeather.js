import { convertDate } from './DateFunctions'
import * as S from './Styles'

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <S.DataItemContainer className='forecast'>
   <S.Heading>Forecast:</S.Heading>
   {forecastArr.map((day) => {
    return (
     <S.DailyForecast key={day.dt}>
      <S.ForecastDate>{convertDate(day.dt)}</S.ForecastDate>
      <S.ForecastItem>↑ {day.temp.max}°</S.ForecastItem>
      <S.ForecastItem>↓ {day.temp.min}°</S.ForecastItem>
     </S.DailyForecast>
    )
   })}
  </S.DataItemContainer>
 )
}

export default ForecastWeather
