import { useState } from 'react'
import SearchBar from './SearchBar'

function Main() {
 const [city, setCity] = useState()
 return (
  <div>
   <SearchBar />
   <p>Current Placeholder</p>
   <p>Forecast Placeholder</p>
  </div>
 )
}

export default Main
