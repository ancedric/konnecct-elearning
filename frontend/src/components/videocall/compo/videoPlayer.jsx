import React, { useContext } from 'react';
import { styled } from 'styled-components';

import { SocketContext } from '../Context';

const Container = styled.div`
  .video {
    width: 550px;
    [theme.breakpoints.down('xs')]: {
      width: 300px;
    }
  }
  .gridContainer {
    justify-content: center;
    [theme.breakpoints.down('xs')]: {
      flex-direction: column;
    }
  }
  .paper {
    padding: 10px;
    border: 2px solid black;
    margin: 10px;
  }
`;

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <Container>
    <div className="gridContainer">
      {stream && (
        <div className="paper">
          <div>
            <h5>{name || 'Name'}</h5>
            <video playsInline muted ref={myVideo} autoPlay className="video" />
          </div>
        </div>
      )}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div>
            <h5>{call.name || 'Name'}</h5>
            <video playsInline ref={userVideo} autoPlay className="video" />
          </div>
        </div>
      )}
    </div>
    </Container>
  );
};

export default VideoPlayer;
