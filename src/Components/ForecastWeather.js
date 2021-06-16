import { Grid, Typography } from '@material-ui/core'
function ForecastWeather({ data }) {
 const forecastArr = data.daily

 return (
  <Grid container>
   {forecastArr.map((day) => {
    return (
     <Grid container key={day.dt}>
      <Grid item>
       <p>Date: {day.dt}</p>
      </Grid>
      <Grid item>
       <p>Desc: {day.weather[0].description}</p>
      </Grid>
      <Grid item>
       <p>Max: {day.temp.max}</p>
      </Grid>
      <Grid item>
       <p>Min: {day.temp.min}</p>
      </Grid>
     </Grid>
    )
   })}
  </Grid>
 )
}

export default ForecastWeather
