import { convertDate } from '../utilities/DateFunctions'
import '../styles/styles.css'

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <div className='cont cont--border cont--flex-column cont--padding cont--data'>
   <p className='subheading subheading--bold-underline'>Forecast:</p>
   {forecastArr.map((day) => {
    return (
     <div className='cont cont--flex-row' key={day.dt}>
      <p className='body body--flex-grow-2'>{convertDate(day.dt)}</p>
      <p className='body body--flex-grow-1'>↑ {day.temp.max}°</p>
      <p className='body body--flex-grow-1'>↓ {day.temp.min}°</p>
     </div>
    )
   })}
  </div>
 )
}

export default ForecastWeather
