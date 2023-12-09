import React, { useEffect } from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const StyledNews= Styled.div`
    display: flex;
    flex direction: row;
    justify-content: space-between;
    align-items: center;
    height: 40vh;
    width: 80vw;
    @media(max-width: 450px){
      flex-direction: column;
    }
`
const NewsBlock= Styled.div`
    width:45%;
    height:80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 450px){
        width: 80%;
        height: 40%;
      }

      .rate{
        display : flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 30%;
        color:#f0aa5b;
        font-size: 22px;
          @media screen and(max-width: 450px){
          font-size: 16px;
        }
        h1, p{
          margin: 5px;
        }
      }
`
const NewsIllus= Styled.div`
    display: flex;
    flex-direction: column;
    width:45%;
    height:80%;
    justify-content: center;
    align-items: center;
    .marketing{
      width: 80%;
      font-size: 16px;
      text-align left;
    }
    .socials{
      font-size: 10px;
    }
    @media(maxwidth:450px;){
      width: 80%;
      height:45%;
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
        <StyledNews>
            <NewsBlock>
                <div className="rate">
                  <h1>10k</h1>
                  <p>Active students</p>
                </div>
                <div className="rate">
                  <h1>4.7/5</h1>
                  <p>2.590 rating</p>
                </div>
            </NewsBlock>
            <NewsIllus>
            <div className="marketing">
              <p>Trusted by 25,000+ happy students are joining with us to achieve their goals.</p>
              <div className="socials">Also faetured in<br/>
                facebook twitter intagram
              </div>
            </div>
            </NewsIllus>
        </StyledNews>
    );
}

export default News;
