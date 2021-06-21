import { useState } from 'react'
import './Styles.css'

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
  <div className='container container--flex container--column container--padding container--border container--align-center'>
   <div className='container container--flex container--column container--search-input'>
    <label className='subheading subheading--bold-underline' for='cityName'>
     Enter an Australian city:
    </label>
    <input
     className='input'
     type='text'
     id='cityName'
     name='cityName'
     onChange={changeHandler}
    ></input>
   </div>
   <button className='button' onClick={clickHandler}>
    Search
   </button>
  </div>
 )
}

export default SearchBar
