import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from '../Banner/index.jsx';
import News from '../News/index.jsx';
import VideoCall from '../videocall/videocall.jsx';
import PopularCourse from '../popularcourse/index.jsx';
import CourseData from '../courses/coursedata.jsx';
import Testimony from '../testimony/testimony.jsx';
import Footer from '../Footer/index.jsx';
import Styled from 'styled-components';

const StyledHeader= Styled.div`
  display: flex;
  flex-direction: column;
`

function Home() {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const [validation, setValidation]= useState('');

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      console.log(res.data);
      if(res.data.valid){
       
        setName(res.data.username);
        setValidation (res.data.valid);
      }else{
        navigate('/signin')
      }
    })
    .catch(err => console.log(err))
  },[name, navigate])
     console.log({name});
     const Notify = ()  => {
      toast.success("Successfully logged in  ", {
        position: toast.POSITION.TOP_CENTER      })
     }

  return (
      <>
        <StyledHeader>
          {validation ? <Notify/>: null}
          <ToastContainer/>
          <Banner/>
        </StyledHeader>
        <News/>
        <PopularCourse course={CourseData}/>
        <VideoCall/>
        <Testimony/>
        <Footer/>
      </>
  );
}

export default Home;
