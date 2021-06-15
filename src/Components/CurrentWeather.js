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

 return (
  <Grid container direction='column'>
   <Grid item>
    <Typography variant='h2'>{data.current.temp}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h2'>
     {capitaliseFirstLetter(data.current.weather[0].description)} in {city}.
    </Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>Min: {data.daily[0].temp.min}°</Typography>
    <Typography variant='h6'>Max: {data.daily[0].temp.max}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>
     Rain: {data.daily[0].pop}%
     {data.daily[0].rain && `/${data.daily[0].rain}mm`}
    </Typography>
    <Typography variant='h6'>Humidity: {data.daily[0].humidity}%</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>
     Sunrise: {convertTime(data.current.sunrise)}
    </Typography>
    <Typography variant='h6'>
     Sunset: {convertTime(data.current.sunset)}
    </Typography>
   </Grid>
  </Grid>
 )
}

export default CurrentWeather
