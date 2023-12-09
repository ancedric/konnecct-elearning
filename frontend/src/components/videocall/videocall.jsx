import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SimpleVideoPlayer from '../videoplayer/simplevideoplayer.jsx';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 80vw;
    
    .title-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 30%;
    }

    .call-button{
        justify-content: center;
        align-items: center;
    }

    .button{
        background-color: #e6eaf0;
        border: 2px solid #eb5a2a;
        border-radius: 5px;
        color: #eb5a2a;
        width: 200px;
        height: 30px;
        &:hover{
            color:#fff;
            background-color:#eb5a2a;
        }
    }

    .video-player-container{
        width: 80%;
        height: 70%;
        margin: 10px;
        border-radius: 5px;
    }
`
function VideoCall(){

    return(
        <Container>
            <div className="title-container">
                <div className="title"><h3>Join your live class with your instructor via video chat</h3></div>
                <div classNam="call-button">
                <Link to='/bookcall'><button className="button">Join class</button></Link>
                </div> 
            </div>
            <div className="video-player-container">
                <SimpleVideoPlayer />
            </div>
        </Container>
    )
}

export default VideoCall;