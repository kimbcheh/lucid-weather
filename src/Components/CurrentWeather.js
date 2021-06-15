import { Grid, Typography } from '@material-ui/core'

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
    <Typography variant='h6'>Sunrise: 7:00am</Typography>
    <Typography variant='h6'>Sunset: 5:00pm</Typography>
   </Grid>
  </Grid>
 )
}

export default CurrentWeather
