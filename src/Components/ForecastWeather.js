import { convertDate } from './DateFunctions'
import './Styles.css'

function ForecastWeather({ data }) {
 const forecastArr = data.daily.slice(1)

 return (
  <div className='container container--flex container--column container--border container--padding container--data'>
   <p className='subheading subheading--bold-underline'>Forecast:</p>
   {forecastArr.map((day) => {
    return (
     <div className='container container--flex container--row' key={day.dt}>
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
