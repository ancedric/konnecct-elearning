import React, {useEffect, useState} from 'react';
import Styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StyledLoginBar= Styled.div`
    display: flex;
    flex-direction: row;
    width:100%;
    height: 60px;
    padding-right: 20px;
    background-color: #fff;
    position: absolute;
    top: 0;
    z-index: 15;
    box-shadow: 0 1px 3px #000;
    border-bottom: 1px solid;
`
const DateTime = Styled.div`
    width:50%;
    display: flex;
    flex-direction: row;
    p{
        margin: 10px;
    }
`
const Connexion = Styled.div`
    width:50%;
    height:100%
    justify-content: center;
    align-items: center;
`

export default function LoginBar() {

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

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
        }
      })
      .catch(err => console.log(err))
    },[])

    return (
        <StyledLoginBar>
                 <Link to ='/'>Home</Link>
                <DateTime>
                    <p>Date: {currentDate}</p>
                    <p>Time: {currentTime}</p>
                </DateTime>
                <Connexion>
                    {validation ? (
                    <p>Welcome {name}</p>
                    ) : (
                    <Link to="/signin">Join us</Link>
                    )}
                </Connexion>
        </StyledLoginBar>
      );      


 
}
