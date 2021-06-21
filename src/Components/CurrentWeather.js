import { convertTime } from './DateFunctions'
import * as S from './Styles'

function CurrentWeather({ data }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <S.DataItemContainer>
   <S.Heading>Currently:</S.Heading>
   <S.CurrentTemp>{current.temp}°</S.CurrentTemp>
   <S.CurrentDesc>
    Enjoy your {current.weather[0].description} today.
   </S.CurrentDesc>
   <S.CurrentItem>
    Temp: ↑ {daily.temp.max}° ↓ {daily.temp.min}°
   </S.CurrentItem>
   <S.CurrentItem>
    Rain: {daily.pop}% {daily.rain && `/ ${daily.rain}mm`}
   </S.CurrentItem>
   <S.CurrentItem>Sunrise: {convertTime(current.sunrise)}</S.CurrentItem>
   <S.CurrentItem>Sunset: {convertTime(current.sunset)}</S.CurrentItem>
  </S.DataItemContainer>
 )
}

export default CurrentWeather
