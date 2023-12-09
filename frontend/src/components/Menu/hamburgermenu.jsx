import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const MenuContainer = styled.div`
    @media(min-width: 760px){
        display:none;
    }
`;
const HamburgerButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: none;
    cursor: pointer;
    border: none;
    border-radius:5px;

    .bar{
        width:100%;
        height:2px;
        background-color: #000;
        margin-bottom:4px;
        transition: transform 0.3s ease;
    }
    .open: nth-child(1){
        transform: rotate(45deg) translate(5px, 5px);
    }
    .open: nth-child(2){
     opacity: 0;
    }
    .open: nth-child(3){
        transform: rotate(-45deg) translate(5px, -6px);
    }
`
const MenuList= styled.ul`
    position:absolute;
    top:40px;
    right:0;
    width:200px;
    background-color: #fff;
    list-style: none;
    padding: 10px;
    border: 1px solid #ccc;
`
const MenuItem = styled.li`
    margin-bottom: 10px;
    Link{
        text-decoration: none;
    }
`
function HamburgerMenu(){
    const [isOpen, setIsOpen]= useState(false);
    const toogleMenu = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <MenuContainer>
            <HamburgerButton onClick= {toogleMenu}>
                <div className={`bar §{isOpen ? 'open' : ''}`}/>
                <div className={`bar §{isOpen ? 'open' : ''}`}/>
                <div className={`bar §{isOpen ? 'open' : ''}`}/>
            </HamburgerButton>
            {isOpen && (
                <MenuList>
                    <MenuItem><Link to="/home">Home</Link></MenuItem>
                    <MenuItem><Link to="/courses">Courses</Link></MenuItem>
                    <MenuItem><Link to="/">About</Link></MenuItem>
                    <MenuItem><Link to="/">Contact</Link></MenuItem>
                    <MenuItem><Link to="/signin">Log in</Link></MenuItem>
                    <MenuItem><Link to="/signup">Sign up</Link></MenuItem>
                </MenuList>
            )}
        </MenuContainer>
    );
};

export default HamburgerMenu;