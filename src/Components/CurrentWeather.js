import { convertTime } from './DateFunctions'
import './Styles.css'

function CurrentWeather({ data }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <div className='container container--border container--padding container--data'>
   <p className='subheading subheading--bold-underline'>Currently:</p>
   <p className='heading heading--xlarge'>{current.temp}°</p>
   <p className='heading'>Enjoy your {current.weather[0].description} today.</p>
   <p className='body'>
    Temp: ↑ {daily.temp.max}° ↓ {daily.temp.min}°
   </p>
   <p className='body'>
    Rain: {daily.pop}% {daily.rain && `/ ${daily.rain}mm`}
   </p>
   <p className='body'>Sunrise: {convertTime(current.sunrise)}</p>
   <p className='body'>Sunset: {convertTime(current.sunset)}</p>
  </div>
 )
}

export default CurrentWeather
