import { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'

function SearchBar({ onSearch }) {
 const [searchTerm, setSearchTerm] = useState()

 const changeHandler = (event) => {
  setSearchTerm(event.target.value)
 }

 const clickHandler = (event) => {
  event.stopPropagation()
  event.preventDefault()
  onSearch(searchTerm)
 }

 return (
  <Grid container>
   <TextField
    id='standard-basic'
    label='Enter your city name'
    onChange={changeHandler}
   />
   <Button
    variant='contained'
    color='primary'
    disableElevation
    onClick={clickHandler}
   >
    Search
   </Button>
  </Grid>
 )
}

export default SearchBar
