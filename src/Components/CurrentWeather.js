import { convertTime } from './DateFunctions'

function CurrentWeather({ data }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <div>
   <div>
    <h2>{current.temp}°</h2>
   </div>
   <div>
    <h4>Enjoy your {current.weather[0].description} today.</h4>
   </div>
   <div>
    <div>
     <p>
      TEMP: ↑ {daily.temp.max}° ↓ {daily.temp.min}°
     </p>
    </div>
    <div>
     <p>
      RAIN: {daily.pop}% {daily.rain && `/ ${daily.rain}mm`}
     </p>
    </div>
    <div>
     <p>SUNRISE: {convertTime(current.sunrise)}</p>
     <p>SUNSET: {convertTime(current.sunset)}</p>
    </div>
   </div>
  </div>
 )
}

export default CurrentWeather
