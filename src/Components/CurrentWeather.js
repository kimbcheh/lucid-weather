import { convertTime } from '../utilities/DateFunctions'
import '../styles/styles.css'

function CurrentWeather({ data, city }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <section className='cont cont--border cont--data cont--padding'>
   <h2 className='subheading subheading--bold-underline'>
    Currently in {city.toUpperCase()}:
   </h2>
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
  </section>
 )
}

export default CurrentWeather
