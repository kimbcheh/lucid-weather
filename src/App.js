import Main from './Components/Main'
import Footer from './Components/Footer'
import Header from './Components/Header'
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
   <Header />
   <Main />
   <Footer />
  </div>
 )
}

export default App
