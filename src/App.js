import Main from './Components/Main'
import { Grid } from '@material-ui/core'
import './App.css'

function App() {
  return (
    <Grid container direction='column'>
      <Grid item>
        <p>Header Placeholder</p>
      </Grid>
      <Main />
      <Grid item>
        <p>Footer Placeholder</p>
      </Grid>
    </Grid>
  )
}

export default App
