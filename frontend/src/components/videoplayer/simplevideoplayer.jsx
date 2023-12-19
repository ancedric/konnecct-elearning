import React from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoContainer= styled.div`
    width:80vw;
    height: 80vh;
`
function VideoPlayer({url}){

    return(
        <VideoContainer>
            <ReactPlayer
                url = {url}
                controls
                playing
                muted
                width='100%'
                height='100%'
                className='react-player'
            />
        </VideoContainer>
    )
}

export default VideoPlayer;