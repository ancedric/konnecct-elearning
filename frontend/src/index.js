import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './components/connexion/signin.jsx';
import Signup from './components/connexion/signup.jsx';
import App from './components/index.jsx';
import './components/fonts.css'
import Home from './components/home/index.jsx';
import LoginBar from './components/loginBar/index.jsx'; 
import Courses from './components/courses/courses.jsx'; 
import ViewCourse from './components/courses/viewcourse.jsx'; 
import VideoChat from './components/videocall/Videochat.jsx';
import VChat from './components/videocall/chatvideo.jsx'; 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <LoginBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/view/:id" element={<ViewCourse />} />
        <Route path="/videochat" element={<VideoChat />} />
        <Route path="/virtualclassroom" element={<VChat />} />
        
      </Routes>
    </Router>
  </React.StrictMode>
);

