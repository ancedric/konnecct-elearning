import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import video from '../../assets/video/free-online-courses-with-free-certificates.mp4';

const PlayerWrapper= styled.div`
    position: relative;
    .react-player {
        position: absolute;
        top: 0;
        left: 0;
    }
`
const InteractiveVideo = () => {
    const url = {video};

   
   return(
    <PlayerWrapper>
      <ReactPlayer
        url={url}
        controls
        playing
        muted
        width='100%'
        height='100%'
        classname='react-player'
      />
    </PlayerWrapper>
   )
};

export default InteractiveVideo;
