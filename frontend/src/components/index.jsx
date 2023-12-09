import React from 'react';
import CourseData from './courses/coursedata.jsx';
import PopularCourse from './popularcourse/index.jsx';
import VideoCall from './videocall/videocall.jsx'
import Banner from './Banner/index.jsx';
import Testimony from './testimony/testimony.jsx';
import News from './News/index.jsx';
import Footer from './Footer/index.jsx';
import Styled from 'styled-components';

const StyledHeader= Styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  
  return (
      <>
        <StyledHeader>
          <Banner/>
        </StyledHeader>
        <News/>
        <PopularCourse course={CourseData}/>
        <VideoCall/>
        <Testimony/>
        <Footer/>
      </>
  );
}

export default App;
