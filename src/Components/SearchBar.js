import { useState } from 'react'

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
  <div>
   <label for='cityName'>Enter an Australian city:</label>
   <input
    type='text'
    id='cityName'
    name='cityName'
    onChange={changeHandler}
   ></input>
   <button onClick={clickHandler}>Search</button>
  </div>
 )
}

export default SearchBar
