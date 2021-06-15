import { Button, Grid, TextField } from '@material-ui/core'

function SearchBar() {
 return (
  <Grid container>
   <TextField id='standard-basic' label='Enter your city name' />
   <Button variant='contained' color='primary' disableElevation>
    Search
   </Button>
  </Grid>
 )
}

export default SearchBar
