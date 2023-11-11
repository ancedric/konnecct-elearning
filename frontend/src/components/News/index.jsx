import React, { useEffect } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledNews= Styled.div`
    background-color: #E0E0E0;
    height: 700px;
`
const NewsBlock= Styled.div`
    width:500px;
    height:500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#9FF6C5;
    position:absolute;
    left:200px;
    top:700px;
    @keyframes slideInLeft {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      animation: 1s ease-out 0s 1 slideInLeft;
`
const NewsIllus= Styled.div`
    width:500px;
    height:400px;
    background-color:#fff;
    z-index:4;
    position: absolute;
    right: 250px;
    top: 750px;
`

function News() {

    useEffect(() => {
      AOS.init({
        duration: 600,
        delay: 200
      });
    },[])
    return (
        <StyledNews>
            <NewsBlock data-aos = "slide-left">
                <h1>Latest News</h1>
                <p>Welcome to our news page!</p>
            </NewsBlock>
            <NewsIllus data-aos = "slide-right">
                <img src='./Banner/Slides/cours.png' alt=''/>
            </NewsIllus>
        </StyledNews>
    );
}

export default News;
