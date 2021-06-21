import { useState } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
 /* background-color: seashell; */
 display: flex;
 flex-direction: column;
 padding-bottom: 1rem;
 padding-top: 1rem;
 border-top: 1px solid black;
 border-bottom: 1px solid black;
`

const SearchLabel = styled.label`
 /* background-color: teal; */
 font-size: 0.8rem;
 font-weight: bold;
 text-decoration: underline;
 margin: 0.25rem;
`

const SearchInput = styled.input`
 margin: 0.25rem;
 padding: 0.5rem;
 border-radius: 0;
 border: 1px solid black;
 font-family: 'Roboto Mono', monospace;
 font-size: 1rem;
 &:focus {
  outline: 2px solid pink;
 }
`

const SearchButton = styled.button`
 margin: 0.25rem;
 background-color: black;
 border: none;
 color: white;
 padding: 1rem;
 text-align: center;
 align-self: center;
 width: 50%;
 font-size: 1rem;
 cursor: pointer;
 font-family: 'Roboto Mono', monospace;
 &:focus {
  outline: 2px solid pink;
 }
`

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
  <SearchContainer>
   <SearchLabel for='cityName'>Enter an Australian city:</SearchLabel>
   <SearchInput
    type='text'
    id='cityName'
    name='cityName'
    onChange={changeHandler}
   ></SearchInput>
   <SearchButton onClick={clickHandler}>Search</SearchButton>
  </SearchContainer>
 )
}

export default SearchBar
