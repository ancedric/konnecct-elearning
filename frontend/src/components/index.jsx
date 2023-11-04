import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
{/*import Menu from './Menu/index.jsx';
import GlobalStyle from '../Assets/globalStyle.jsx';
import Banner from './Banner/index.jsx';
import News from './News/index.jsx';
import SearchBar from './SearchBar/index.jsx';
import Footer from './Footer/index.jsx';
import Styled from 'styled-components';

const StyledHeader= Styled.div`
  display: block;
`
const StyledMenu= Styled(Menu)`
  position: absolute;
  top:0;
  left:0;
  z-index:2;
`*/}

function App() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:8081')
    .then(res => {
      console.log(res.data);
      if(res.data.valid){
       
        setName(res.data.username);
      }else{
        navigate('/signin')
      }
    })
    .catch(err => console.log(err))
  },[])
     console.log({name});
  return (
      <>Welcome {name}
        {/*<GlobalStyle/>
        <StyledHeader>
          <Banner/>
          <StyledMenu/>
          <SearchBar/>
        </StyledHeader>
        <News/>
  <Footer/>*/}
      </>
  );
}

export default App;
