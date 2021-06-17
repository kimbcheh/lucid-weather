import { Grid, Typography } from '@material-ui/core'
import { convertTime } from './DateFunctions'

function CurrentWeather({ data }) {
 let current = data.current
 let daily = data.daily[0]

 return (
  <Grid container direction='column'>
   <Grid item>
    <Typography variant='h2'>{current.temp}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h4'>
     Enjoy your {current.weather[0].description} today.
    </Typography>
   </Grid>
   <Grid container direction='column'>
    <Grid item>
     <Typography variant='h6'>
      TEMP: ↑ {daily.temp.max}° ↓ {daily.temp.min}°
     </Typography>
    </Grid>
    <Grid item>
     <Typography variant='h6'>
      RAIN: {daily.pop}% {daily.rain && `/ ${daily.rain}mm`}
     </Typography>
    </Grid>
    <Grid item>
     <Typography variant='h6'>
      SUNRISE: {convertTime(current.sunrise)}
     </Typography>
     <Typography variant='h6'>SUNSET: {convertTime(current.sunset)}</Typography>
    </Grid>
   </Grid>
  </Grid>
 )
}

export default CurrentWeather
