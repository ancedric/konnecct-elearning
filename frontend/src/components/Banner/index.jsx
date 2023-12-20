import React, { useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import InteractiveVideo from "./Slides/interactive-videos.png"
import FreeTimingLearning from "./Slides/free-timing-learning.png"
import DynamicClassrooms from "./Slides/dynamicclassrooms.png"
import CertifiedCourses  from "./Slides/certified-courses.png"

const SliderContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100dvh;
    min-width: 100vw;
    background-image: linear-gradient(to right, #73AAFD, rgba(255,255,255,0));
    @media(max-width: 450px){
      flex-direction:column;
      margin-bottom: 50px;
    }
  `
  const StyledSlideImage= styled.div`
  align-items: center;
  width:45%;
  height:80%;
  @media(max-width:450px){
    height:45%;
    width:80%;
  }
`
const StyledOverlay = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    order:-1;
    width: 45%;
    background-color: rgba(0,0,0,0.3);
    color: #fff;
    text-align: left;
    padding: 15px;
    @media(max-width: 450px){
      justify-content: flex-start;
      order:0;
      font-size:10px;
      text-align: center;
      width: 80%;
      background-color: rgba(0,0,0,0.3);
    }
`

const StyledCta= styled.div`
    background-color: #1F869C;
    width: 150px;
    padding:10px;
    margin: auto;
    font-weight: bold;
    color:#fff;
    text-align: center;
    cursor: pointer;
    transition: all ease-in-out  0.3s;
    &:hover{
      background-color: #03fce3;
      outline: 3px solid #fff;
      outline offset: -3px;
    }
    @media(max-with:450px){
      font-size:10px;
    }
`
const StyledCarousel= styled(Carousel)`
    cursor: default;
    .carousel .thumbs{
      display:none;
    }
`

   
function Banner(){
        useEffect(() => {
          AOS.init({
            duration: 600,
            delay: 200
          });
        },[])
        return (
            <StyledCarousel autoPlay interval={4000} infiniteLoop showStatus={false}>
              
                <SliderContainer>
                  <StyledSlideImage><img src={InteractiveVideo} alt="" /></StyledSlideImage>
                  <StyledOverlay>
                    <h2 className= "overlay_title" data-aos="slide-left">Interactive videos courses</h2>
                    <p className= "overlay_text" data-aos="zoom-in">A new design learning with interactive videos, to immerge the student in the course</p>
                    <Link to='/courses'><StyledCta data-aos="fade-in">Discover now</StyledCta></Link>
                  </StyledOverlay>
                </SliderContainer>
                <SliderContainer>
                  <StyledSlideImage><img src={ FreeTimingLearning } alt="" /></StyledSlideImage>
                  <StyledOverlay>
                    <h2 className= "overlay_title" data-aos="slide-left">Learn at your own schedule</h2>
                    <p className= "overlay_text" data-aos="zoom-in">You can learn from everywhere, at your own time and rythm</p>
                    <Link to='/courses'><StyledCta data-aos="fade-in">Try today</StyledCta></Link>
                  </StyledOverlay>
                </SliderContainer>
                <SliderContainer>
                <StyledSlideImage><img src={ DynamicClassrooms } alt="" /></StyledSlideImage>
                <StyledOverlay>
                  <h2 className= "overlay_title" data-aos="slide-left">Dynamic classrooms</h2>
                  <p className= "overlay_text" data-aos="zoom-in">Experience dynamism in the e-learning like never before, with the new learning format</p>
                  <Link to='/courses'><StyledCta data-aos="fade-in">Let's go</StyledCta></Link>
                </StyledOverlay>
              </SliderContainer>
              <SliderContainer>
                <StyledSlideImage><img src={ CertifiedCourses } alt="" /></StyledSlideImage>
                <StyledOverlay>
                  <h2 className= "overlay_title">Certified courses</h2>
                  <p className= "overlay_text">"You can have a proof of your succees with certificate of completion, with our certificates</p>
                  <Link to='/courses'><StyledCta data-aos="fade-in">Engage today</StyledCta></Link>
                </StyledOverlay>
              </SliderContainer>
            </StyledCarousel>
          );
        }

        export default Banner;
