import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signin from './components/connexion/signin.jsx';
import Signup from './components/connexion/signup.jsx';
import GlobalStyle from './assets/globalStyle.jsx';
import App from './components/index.jsx';
import Home from './components/home/index.jsx';
import LoginBar from './components/loginBar/index.jsx'; 

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
      </Routes>
    </Router>
  </React.StrictMode>
);

