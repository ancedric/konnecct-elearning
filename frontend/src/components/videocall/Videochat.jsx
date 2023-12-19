import React, { useEffect, useRef, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'
import io from 'socket.io-client'

const socket = io.connect("http://localhost:8081")

function VideoChat() {
    // State variables
    const [me, setMe] = useState('')
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState('')
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState('')
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    // Refs
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()

    // useEffect hook
    useEffect(() => {
        socket.current = io.connect('http://localhost:8081')
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            setStream(stream)
            myVideo.current.srcObject = stream
        })

        socket.current.on('me', (id) => {
            setMe(id)
        })

        socket.current.on('callUser', (data) => {
            setReceivingCall(true)
            setCaller(data.from)
            setName(data.name)
            setCallerSignal(data.signal)
        })

        socket.current.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message])
        })
    }, [])

    // Function to call a user
    const callUser = (id) => {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream
        })
        peer.on('signal', (data) => {
            socket.current.emit('callUser', {
                userToCall: id,
                signalData: data,
                from: me,
                name: name
            })
        })
        peer.on('stream', (stream) => {
            userVideo.current.srcObject = stream
        })

        socket.current.on('callAccepted', (signal) => {
            setCallAccepted(true)
            peer.signal(signal)
        })

        connectionRef.current = peer
    }

    // Function to answer a call
    const answerCall = () => {
        setCallAccepted(true)
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream: stream
        })
        peer.on('signal', (data) => {
            socket.current.emit('answerCall', { signal: data, to: caller })
        })
        peer.on('stream', (stream) => {
            userVideo.current.srcObject = stream
        })

        peer.signal(callerSignal)
        connectionRef.current = peer
    }

    // Function to leave a call
    const leaveCall = () => {
        setCallEnded(true)
        connectionRef.current.destroy()
    }

    // Function to send a message
    const sendMessage = () => {
        socket.current.emit('message', message)
        setMessage('')
    }

    // JSX
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#000' }}>Live Classroom</h1>
            <div className="container">
                <div className="video-container">
                    <div className="video">
                        {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: '300px' }} />}
                    </div>
                    <div className="video">
                        {callAccepted && !callEnded ?
                            <video playsInline ref={userVideo} autoPlay style={{ width: '300px' }} /> :
                            null}
                    </div>
                </div>
                <div className="myId">
                    <input type="text" id="filled-basic" label="Name" variant="filled" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '20px' }} />
                    <CopyToClipboard text={me} style={{ marginBottom: '2rem' }}>
                        <button>
                            Copy ID
                        </button>
                    </CopyToClipboard>
                    <input type ="text" id="filled-basic" label="ID to call" variant="filled" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} style={{ marginBottom: '20px' }} />
                    <div className="call-button">
                        {callAccepted && !callEnded ? (
                            <button onClick={leaveCall}>
                                End Call
                            </button>
                        ) : (
                            <button onClick={() => callUser(idToCall)}>
                                Call
                            </button>
                        )}
                        {idToCall}
                    </div>
                </div>
                <div>
                    {receivingCall && !callAccepted ? (
                        <div className="caller">
                            <h1>{name} is calling...</h1>
                            <button onClick={answerCall}>
                                Answer
                            </button>
                        </div>
                    ) : null}
                </div>
                <div className="chat-container">
                    <h2>Chat</h2>
                    <div className="messages">
                        {messages.map((message, index) => (
                            <div key={index}>{message}</div>
                        ))}
                    </div>
                    <div className="input-container">
                        <input type= "text"
                            id="filled-basic"
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            />
                        <button onClick={sendMessage}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoChat;