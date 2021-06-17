import { convertDate } from './DateFunctions'

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <div>
   {forecastArr.map((day) => {
    return (
     <div key={day.dt}>
      <p>{convertDate(day.dt).toUpperCase()}</p>
      <p>{day.weather[0].description.toUpperCase()}</p>
      <p>↑ {day.temp.max}</p>
      <p>↓ {day.temp.min}</p>
     </div>
    )
   })}
  </div>
 )
}

export default ForecastWeather
