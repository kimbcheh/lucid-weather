import { useState } from 'react'
import * as S from './Styles'

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
  <S.SearchContainer>
   <S.SearchInputContainer>
    <S.SearchLabel for='cityName'>Enter an Australian city:</S.SearchLabel>
    <S.SearchInput
     type='text'
     id='cityName'
     name='cityName'
     onChange={changeHandler}
    ></S.SearchInput>
   </S.SearchInputContainer>
   <S.SearchButton onClick={clickHandler}>Search</S.SearchButton>
  </S.SearchContainer>
 )
}

export default SearchBar
