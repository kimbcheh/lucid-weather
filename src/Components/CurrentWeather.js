import { Grid, Typography } from '@material-ui/core'
import dayjs from 'dayjs'

dayjs().format()

// Capitalise weather description
// Conditionally render rain amount if it exists
// Convert UNIX time to actual times

function CurrentWeather({ data }) {
 return (
  <Grid container direction='column'>
   <Grid item>
    <Typography variant='h1'>{data.current.temp}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h1'>
     {data.current.weather[0].description} in Sydney
    </Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>Min: {data.daily[0].temp.min}°</Typography>
    <Typography variant='h6'>Max: {data.daily[0].temp.max}°</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>Rain: 5%/1.18mm</Typography>
    <Typography variant='h6'>Humidity: {data.daily[0].humidity}%</Typography>
   </Grid>
   <Grid item>
    <Typography variant='h6'>
     Sunrise: {dayjs.unix(data.current.sunrise).format('h:mm a')}
    </Typography>
    <Typography variant='h6'>
     Sunset: {dayjs.unix(data.current.sunset).format('h:mm a')}
    </Typography>
   </Grid>
  </Grid>
 )
}

export default CurrentWeather
