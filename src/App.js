import Main from './Components/Main'
import './App.css'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
font-family:'Roboto Mono', monospace;
}
`

function App() {
 return (
  <div>
   <GlobalStyle />
   <p>Header Placeholder</p>
   <Main />
   <p>Footer Placeholder</p>
  </div>
 )
}

export default App
