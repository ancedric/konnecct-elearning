import React from 'react';
import { styled } from 'styled-components';

import VideoPlayer from './compo/videoPlayer';
import Sidebar from './compo/sidebar';
import Notifications from './compo/notifications';

const Container = styled.div`
  .appBar {
    border-radius: 15px;
    margin: 30px 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 600px;
    border: 2px solid black;

    [theme.breakpoints.down('xs')]: {
      width: 90%;
    }
  }
  .image {
    margin-left: 15px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Vchat = () => {

  return (
   <Container> <div className="wrapper">
      <div className="appBar">
        <h2>Video Chat</h2>
      </div>
      <VideoPlayer />
      <div>
        <Notifications />
         <Sidebar/>
      </div>
    </div>
    </Container>
  );
};

export default Vchat;
