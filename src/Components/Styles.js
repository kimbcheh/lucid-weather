import styled from 'styled-components'

// Shared styles

export const Heading = styled.h2`
 font-size: 0.8rem;
 margin: 0.25rem;
 text-decoration: underline;
`

// Main.js styles

export const MainContainer = styled.div`
 display: flex;
 flex-direction: column;
 min-height: 100vh;
`

export const DataContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
`

export const Spinner = styled.div`
 border: 4px solid #f3f3f3;
 border-radius: 50%;
 border-top: 4px solid #000;
 width: 40px;
 height: 40px;
 animation: spin 2s linear infinite;
 top: 50%;
 right: 50%;
 margin-top: -20px;
 margin-right: -20px;
 position: fixed;
 @keyframes spin {
  0% {
   transform: rotate(0deg);
  }
  100% {
   transform: rotate(360deg);
  }
 }
`

// CurrentWeather.js styles

export const CurrentContainer = styled.div`
 padding-bottom: 1rem;
 padding-top: 1rem;
 border-top: 1px solid black;
 flex-grow: 1;
 min-width: 100%;
 max-width: 800px;
 @media (min-width: 800px) {
  min-width: 800px;
 }
`

export const CurrentTemp = styled.p`
 font-size: 3.5rem;
 margin: 0.25rem;
`

export const CurrentDesc = styled.p`
 font-size: 2.25rem;
 margin: 0.25rem;
`

export const CurrentItem = styled.p`
 margin: 0.25rem;
`

// WeatherForecast.js styles

export const ForecastContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding-bottom: 1rem;
 padding-top: 1rem;
 border-top: 1px solid black;
 flex-grow: 1;
 max-width: 800px;
 min-width: 100%;
 @media (min-width: 800px) {
  min-width: 800px;
 }
`

export const DailyForecast = styled.div`
 display: flex;
 flex-direction: row;
 margin: 0.25rem;
`

export const ForecastItem = styled.p`
 flex-grow: 1;
 flex-shrink: 1;
 flex-basis: 0;
 margin: 0;
`

export const ForecastDate = styled.p`
 flex-grow: 2;
 flex-shrink: 1;
 flex-basis: 0;
 margin: 0;
`

// SearchBar.js styles

export const SearchContainer = styled.div`
 display: flex;
 flex-direction: column;
 padding-bottom: 1rem;
 padding-top: 1rem;
 border-top: 1px solid black;
 align-items: center;
`

export const SearchInputContainer = styled.div`
 width: 100%;
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 max-width: 480px;
`

export const SearchLabel = styled.label`
 font-size: 0.8rem;
 font-weight: bold;
 text-decoration: underline;
 margin: 0.25rem;
`

export const SearchInput = styled.input`
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

export const SearchButton = styled.button`
 margin: 0.25rem;
 background-color: black;
 border: 1px solid black;
 color: white;
 padding: 0.5rem;
 text-align: center;
 width: 50%;
 max-width: 200px;
 font-size: 1rem;
 cursor: pointer;
 font-family: 'Roboto Mono', monospace;
 transition: 0.2s all;
 &:hover {
  background-color: white;
  color: black;
 }
 &:focus {
  outline: 2px solid pink;
 }
 &:active {
  transform: scale(0.96);
 }
`
