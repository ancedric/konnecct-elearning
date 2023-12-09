import React, {useEffect, useState} from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../fonts.css';
import HamburgerMenu from '../Menu/hamburgermenu.jsx';
import Logo from '../../assets/Konnecct-logo.png';
import Avatar from '../../assets/Default-avatar.png';

const StyledLoginBar= Styled.div`
    font-family: 'Epilogue-light';
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width:100vw;
    background-color: #fff;
    position: fixed;
    top: 0;
    z-index: 15;
    box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2);
   `
const Connexion = Styled.div`
    display: flex;
    flex-direction: row;
    width:25%;
    justify-content: center;
    align-items: center;

`
const StyledImgLogo= Styled.img`
    width:250 px;
    height:65px;
`;
const StyledLogo= Styled.div`
    width: 25%;
`;
const StyledConnexion= Styled.div`
    background-color:#1F869C;
    color: #fff;
    font-size:13px;
    margin: 10px;
    width: 50px;
    height: 30px;
    justify-content:center;
    align-items: center;
    margin-top: 15px;
    padding-top: 10px;
    padding-left: 10px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    &:hover{
      background-color: #03fce3;
    }
    @media(max-width: 780px){
      display:none;
    }
`
const StyledJoin= Styled(Link)`
    text-decoration:none;
    color: #fff;
  `
const SignUp= Styled(Link)`
    text-decoration:none;
    color: #000;
    margin:10px;
    transition: text-decoration 0.5s ease;
    &: hover{
      text-decoration: underline;
    }
    @media(max-width:780px){
      display: none;
    }
  `
const StyledAvatar= Styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-top:5px;
    margin-left: 5px;
    @media(max-width: 450px){
      width: 20px;
      height: 20px;
    }
    @media(max-width: 780px){
      width:30px;
      height: 30px;
    }
`
const Menu= Styled.div`
    display: flex;
    flex-direction: row;
    width: 25%;
    justify-content: center;
    font-size: 15 px;
    @media(max-width: 780px){
      display: none;
    }
`
const MenuItem= Styled.li`
    color:#fff;
`
const MenuList= Styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
`
const StyledLink= Styled(Link)`
  text-decoration: none;
  color: #000;
  margin: 10px;border-radius:10px;
  height:30px;
  transition: background-color 0.5s ease;
  &: hover{
    background-color: #cedbd8;
    font-weight: bold;
  }
`
export default function LoginBar() {
    const [name, setName] = useState('');
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
        <><StyledLoginBar>
        <StyledLogo>
          <Link to='/'><StyledImgLogo src={Logo} alt="logo" /></Link>
        </StyledLogo>
        <Menu>
          <MenuList>
            <MenuItem><StyledLink to="/home">Home</StyledLink></MenuItem>
            <MenuItem><StyledLink to="/courses">Courses</StyledLink></MenuItem>
            <MenuItem><StyledLink to="/">About</StyledLink></MenuItem>
            <MenuItem><StyledLink to="/">Contact</StyledLink></MenuItem>
          </MenuList>
        </Menu>
        <Connexion>
          {validation ? (
            <p>Welcome {name} <StyledAvatar src={Avatar} alt={name} /></p>
          ) : (
            <><StyledConnexion><StyledJoin to="/signin">Log in</StyledJoin></StyledConnexion>
            <SignUp to="/signup">Sign up</SignUp></>
          )}
          <HamburgerMenu />
        </Connexion>
        </StyledLoginBar></>
      );      
}
