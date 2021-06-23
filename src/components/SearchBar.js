import { useState } from 'react'
import '../styles/styles.css'

function SearchBar({ onSearch }) {
 const [searchTerm, setSearchTerm] = useState('')

 const changeHandler = (event) => {
  setSearchTerm(event.target.value)
 }

 const clickHandler = (event) => {
  if (searchTerm === '') {
   alert('Sorry, search term cannot be empty!')
  } else {
   event.stopPropagation()
   event.preventDefault()
   onSearch(searchTerm)
  }
 }

 return (
  <form className='cont cont--align-center cont--border cont--flex-column cont--padding'>
   <div className='cont cont--flex-column cont--search-input'>
    <label className='subheading subheading--bold-underline' htmlFor='cityName'>
     Enter an Australian city:
    </label>
    <input
     className='input'
     type='text'
     id='cityName'
     name='cityName'
     onChange={changeHandler}
     placeholder='e.g. Melbourne'
     value={searchTerm}
     required
    ></input>
   </div>
   <button className='button' onClick={clickHandler}>
    Search
   </button>
  </form>
 )
}

export default SearchBar
