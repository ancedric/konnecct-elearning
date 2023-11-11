import React from 'react';
import Menu from './Menu/index.jsx';
import Banner from './Banner/index.jsx';
import News from './News/index.jsx';
import SearchBar from './SearchBar/index.jsx';
import Footer from './Footer/index.jsx';
import Styled from 'styled-components';

const StyledHeader= Styled.div`
  display: block;
`
const StyledMenu= Styled(Menu)`
  position: absolute;
  top:0;
  left:0;
  z-index:2;
`

function App() {
  
  return (
      <>
        <StyledHeader>
          <Banner/>
          <StyledMenu/>
          <SearchBar/>
        </StyledHeader>
        <News/>
  <Footer/>
      </>
  );
}

export default App;
