import Main from './Components/Main'
import Footer from './Components/Footer'
import './App.css'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
font-family:'Roboto Mono', monospace;
/* height: 100%; */
}
`

function App() {
 return (
  <div>
   <GlobalStyle />
   <p>Header Placeholder</p>
   <Main />
   <Footer />
  </div>
 )
}

export default App
