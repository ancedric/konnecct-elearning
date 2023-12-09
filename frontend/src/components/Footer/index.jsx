import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Konnecct-logo.png'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    background-color:#fff;
    padding: 5px;
    margin-top: 5px;
    @media(max-width: 450px){
        flex-direction: column;
    }
    .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        width: 40%;
    }

    .logo {
        width: 50%;
        margin-bottom: 20px;
    }

    .elements{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        text-align: left;
        width: 15%;
    }

    .title{
        font-weight: bold;
    }

    .item{
        list-style-type: none;
        margin-bottom: 5px;
        text-decoration: none;
        color: #000;
    }
`

const Footer = () => {
    return (
        <Container>
            <div className='about'>
                <div className='logo'><img src = {Logo} alt = "konnecct-elearning"/></div>
                <div className='description'>Konnecct e-laerning ise a platform where you can learn many trending topics to enhence your competences, and get the job of yours dreams.</div>
            </div>
            <div className='elements'>
                <div className='title'>Categories</div>
                <ul className='list'>
                <Link to ="/" className="item"><li className='item'>Backend developper</li></Link>
                <Link to ="/" className="item"><li className='item'>Frontend developper</li></Link>
                <Link to ="/" className="item"><li className='item'>UX/UI Designer</li></Link>
                <Link to ="/" className="item"><li className='item'>English</li></Link>
                <Link to ="/" className="item"><li className='item'>Mathematics</li></Link>
                <Link to="/" className="item"><li className='item'>Programming & tech</li></Link>
                </ul>
            </div>
            <div className='elements'>
            <div className='title'>Community</div>
                <ul className='list'>
                <Link to ="/" className="item"><li className='item'>Event</li></Link>
                <Link to ="/" className="item"><li className='item'>Forum</li></Link>
                <Link to ="/" className="item"><li className='item'>Podcast</li></Link>                </ul>
            </div>
            <div className='element'>
                <div className='title'>Support</div>
                <ul className='list'>
                <Link to ="/" className="item"><li className='item'>About us</li></Link>
                <Link to ="/" className="item"><li className='item'>Our partners</li></Link>
                <Link to ="/" className="item"><li className='item'>Become an instructor</li></Link>
                <Link to ="/" className="item"><li className='item'>Users conditions</li></Link>
                <Link to ="/" className="item"><li className='item'>Legal notice</li></Link>
                <li className='item'>copyright konnecct-elearning 2024</li>
                </ul>                
            </div>
        </Container>




    );
};

export default Footer;
