import { Grid, Typography } from '@material-ui/core'
function ForecastWeather({ data }) {
 const forecastArr = data.daily

 return (
  <Grid container>
   {forecastArr.map((day) => {
    return (
     <Grid container key={day.dt}>
      <Grid item>
       <Typography variant='body1'>Date: {day.dt}</Typography>
      </Grid>
      <Grid item>
       <Typography variant='body1'>
        {day.weather[0].description.toUpperCase()}
       </Typography>
      </Grid>
      <Grid item>
       <Typography variant='body1'>↑ {day.temp.max}</Typography>
      </Grid>
      <Grid item>
       <Typography variant='body1'>↓ {day.temp.min}</Typography>
      </Grid>
     </Grid>
    )
   })}
  </Grid>
 )
}

export default ForecastWeather
