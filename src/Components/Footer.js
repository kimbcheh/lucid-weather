import styled from 'styled-components'

const FooterContainer = styled.div`
 border-top: 1px solid black;
 height: 50px;
 bottom: 0;
 width: 100%;
 text-align: center;
 position: relative;
`

const FooterText = styled.p`
 font-size: 0.8rem;
`

function Footer() {
 return (
  <FooterContainer>
   <FooterText>&#128171; Made by Kimberly Cheh. </FooterText>
  </FooterContainer>
 )
}

export default Footer
