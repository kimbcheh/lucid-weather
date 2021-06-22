import { convertTime } from './DateFunctions'
import '../styles/styles.css'

function CurrentWeather({ data, city }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <div className='cont cont--border cont--data cont--padding'>
   <p className='subheading subheading--bold-underline'>
    Currently in {city.toUpperCase()}:
   </p>
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
