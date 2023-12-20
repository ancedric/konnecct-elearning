import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

const Button = styled.button`
  margin: 0 8px;
  padding: 8px 16px;
  font-size: 16px;
`;

const VideoChat = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  useEffect(() => {
    const startVideoChat = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        setLocalStream(stream);
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.log('Erreur lors de l\'accès à la caméra et/ou au microphone:', error);
      }
    };

    startVideoChat();
  }, []);

  useEffect(() => {
    if (remoteVideoRef.current && remoteStream) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  const handleStartCall = () => {
    // Code pour initier un appel vidéo ici
    // Vous devrez utiliser votre propre logique pour établir la connexion avec l'autre utilisateur
  };

  const handleEndCall = () => {
    // Code pour terminer l'appel vidéo ici
    // Vous devrez utiliser votre propre logique pour fermer la connexion et arrêter les flux vidéo
  };

  return (
    <>
      <VideoContainer>
        <Video playsInline muted ref={localVideoRef} autoPlay />
        <Video playsInline ref={remoteVideoRef} autoPlay />
      </VideoContainer>
      <ButtonContainer>
        <Button onClick={handleStartCall}>Démarrer l'appel</Button>
        <Button onClick={handleEndCall}>Terminer l'appel</Button>
      </ButtonContainer>
    </>
  );
};

export default VideoChat;
