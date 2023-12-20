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

const VideoChat = ({ targetUserId }) => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [peerConnection, setPeerConnection] = useState(null);

  useEffect(() => {
    const startVideoChat = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
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
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = remoteStream;
    }
  }, [remoteStream]);

  const createPeerConnection = () => {
    const pc = new RTCPeerConnection();

    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        // Envoyer l'ICE candidate à l'utilisateur distant
      }
    };

    setPeerConnection(pc);
  };

  const startCall = async () => {
    if (!peerConnection) {
      createPeerConnection();
    }

    try {
      const offer = await peerConnection.createOffer();
      await peerConnection.setLocalDescription(offer);

      // Envoyer l'offre (SDP) à l'utilisateur distant
    } catch (error) {
      console.log('Erreur lors de la création de l'offre:', error);
    }
  };

  const handleAnswer = async (answerSDP) => {
    const remoteDesc = new RTCSessionDescription(answerSDP);

    try {
      await peerConnection.setRemoteDescription(remoteDesc);
    } catch (error) {
      console.log('Erreur lors de la configuration de la description distante:', error);
    }
  };

  const handleIceCandidate = (candidate) => {
    const iceCandidate = new RTCIceCandidate(candidate);

    try {
      peerConnection.addIceCandidate(iceCandidate);
    } catch (error) {
      console.log('Erreur lors de l\'ajout de l\'ICE candidate:', error);
    }
  };

  return (
    <>
      <VideoContainer>
        <Video playsInline muted ref={localVideoRef} autoPlay />
        <Video playsInline ref={remoteVideoRef} autoPlay />
      </VideoContainer>
      <ButtonContainer>
        <Button onClick={startCall}>Démarrer l'appel</Button>
      </ButtonContainer>
    </>
  );
};

export default VideoChat;
