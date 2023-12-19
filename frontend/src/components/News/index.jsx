import React, { useEffect } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Container= Styled.div`
    display: flex;
    flex direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    width: 100vw;
    @media(max-width: 450px){
      flex-direction: column;
      height: none;
    }

    .card{
      width: 25%;
      height: 80%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.2);
      @media(max-width: 450px){
        width: 80%;
      }
    }
    .title{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 85%;
      height: 45%;
      font-size: 22px;
      font-weight: bold;
      color: orange;
    }

    .text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 85%;
      height: 45%;
      font-size: 12px;
    }
`

function News() {

    useEffect(() => {
      AOS.init({
        duration: 600,
        delay: 200
      });
    },[])
    return (
        <Container>
            <div className="card">
              <div className="title"><h1>10k</h1></div>
              <div className="text"><p>Active students</p></div>
            </div>
            <div className="card">
            <div className="title"><h1>4.7/5</h1></div>
            <div className="text"><p>2.590 rating</p></div>
            </div>
            <div className="card">
              <div className="title"><p>Trusted by 25,000+ happy students.</p></div>
              <div className="text"><p>Also faetured in<br/>
                facebook, twitter, intagram, linkedin, youtube</p>
              </div>
            </div>
        </Container>
    );
}

export default News;
