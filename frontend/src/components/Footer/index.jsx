import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: #000;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1400px;
    width: 100%;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem 0;
    .contact_bar{
      background-color: #8482FF;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      height: 100px;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
    }
    .link{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s ease;
      &:hover{
        background-color: #DE7E2A;
      }
    }
    .cgu_bar{
        background-color: #8482ff;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100px;
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }
    .footer_content{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    .footer_menu{
        width:50%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    .our_society{
        width:50%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }
    
`

const Footer = () => {
    return (
        <StyledFooter>
            <div className='contact_bar'>
                <div className='link'>
                    <h3>Contact</h3>
                </div>
                <div className='link'>
                    <h3>Become an instructor</h3>
                </div>
                <div className='link'>
                    <h3>Our Partners</h3>
                </div>
                <div className='link'>
                    <h3>Rewards</h3>
                </div>
            </div>
            <div className='footer_menu'>
                <div className='footer_content'>
                <div className='offers'>
                    <h3>Offers</h3>
                    <p>Courses</p>
                    <p>Jobs</p>
                </div>
                <div className='our_society'>
                    <h3>Our Society</h3>
                    <p>About us</p>
                    <p>Subscribe to Newsletter</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                        <p>Copyright © konnecct-eLearning 2023</p>
                    </form>
                </div>
                </div>
                <div className='copyright'>
                    
                </div>
            </div>
            <div className='cgu_bar'>
                <div className='link'>
                    <h3>Legal notice</h3>
                </div>
                <div className='link'>
                    <h3>Data protection</h3>
                </div>
                <div className='link'>
                    <h3>User conditions</h3>
                </div>
                <div className='link'>
                    <img src='' alt=''/>
                </div>
            </div>
        </StyledFooter>
    );
};

export default Footer;
