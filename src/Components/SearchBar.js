import { useState } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div`
 /* background-color: seashell; */
 display: flex;
 flex-direction: column;
 padding-bottom: 1rem;
 padding-top: 1rem;
 border-top: 1px solid black;
 /* border-bottom: 1px solid black; */
 align-items: center;
`

const SearchInputContainer = styled.div`
 width: 100%;
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 max-width: 480px;
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
 border: 1px solid black;
 color: white;
 padding: 0.5rem;
 text-align: center;
 /* align-self: center; */
 width: 50%;
 max-width: 200px;
 font-size: 1rem;
 cursor: pointer;
 font-family: 'Roboto Mono', monospace;
 /* max-width: 480px; */
 transition: 0.2s all;
 &:hover {
  background-color: white;
  color: black;
  /* border: 1px solid black; */
 }
 &:focus {
  outline: 2px solid pink;
 }
 &:active {
  transform: scale(0.96);
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
   <SearchInputContainer>
    <SearchLabel for='cityName'>Enter an Australian city:</SearchLabel>
    <SearchInput
     type='text'
     id='cityName'
     name='cityName'
     onChange={changeHandler}
    ></SearchInput>
   </SearchInputContainer>
   <SearchButton onClick={clickHandler}>Search</SearchButton>
  </SearchContainer>
 )
}

export default SearchBar
