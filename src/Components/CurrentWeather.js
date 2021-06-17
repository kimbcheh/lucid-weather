import { Grid, Typography } from '@material-ui/core'
import dayjs from 'dayjs'

dayjs().format()

function CurrentWeather({ data, city }) {
 function capitaliseFirstLetter(description) {
  return description.charAt(0).toUpperCase() + description.slice(1)
 }
 function convertTime(time) {
  return dayjs.unix(time).format('h:mm a')
 }

 let current = data.current
 let daily = data.daily[0]

 return (
  <Grid container direction='column'>
   <Grid item>
    <Typography variant='h2'>{current.temp}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h2'>
     {capitaliseFirstLetter(current.weather[0].description)} in {city}.
    </Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>Min: {daily.temp.min}°</Typography>
    <Typography variant='h6'>Max: {daily.temp.max}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>
     Rain: {daily.pop}%{daily.rain && `/${daily.rain}mm`}
    </Typography>
    <Typography variant='h6'>Humidity: {daily.humidity}%</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>
     Sunrise: {convertTime(current.sunrise)}
    </Typography>
    <Typography variant='h6'>Sunset: {convertTime(current.sunset)}</Typography>
   </Grid>
  </Grid>
 )
}

export default CurrentWeather
