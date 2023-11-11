import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from '../Menu/index.jsx';
import Banner from '../Banner/index.jsx';
import News from '../News/index.jsx';
import SearchBar from '../SearchBar/index.jsx';
import Footer from '../Footer/index.jsx';
import Styled from 'styled-components';

const StyledHeader= Styled.div`
  display: block;
`
const StyledMenu= Styled(Menu)`
  position: absolute;
  top:0;
  left:0;
  z-index:2;
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
      toast.success("Successfully logged in ", {
        position: toast.POSITION.TOP_CENTER      })
     }
  return (
      <>
        <StyledHeader>
          {validation ? <Notify/>: null}
          <ToastContainer/>
          <Banner/>
          <StyledMenu/>
          <SearchBar/>
        </StyledHeader>
        <News/>
  <Footer/>
      </>
  );
}

export default Home;
