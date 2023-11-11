import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const SliderContainer= styled.div`
    display: flex;
    flex-direction: row;
    height: 500px;
    width: 100%;
    background-image: linear-gradient(to right, #73AAFD, rgba(255,255,255,0));
  `

const StyledOverlay = styled.div`
    width: 100%;
    position: absolute;
    top: 10;
    transform: translateY(160%);
    left: 30;
    padding: 0.4rem 1.5 rem;
    color: #fff;
    text-align: center;
`

const StyledCta= styled.div`
    background-color: #1F869C;
    width: 180px;
    height:30px;
    border-radius: 50px;
    margin: auto;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
      background-color: #DE7E2A;
    }
`
const StyledCarousel= styled(Carousel)`
    cursor: default;
    .carousel .thumbs{
      display:none;
    }
`
const StyledSlideImage= styled.div`
    width:45%;
    height:320px;
    position: absolute;
    top: 140px;
    left: 680px;
    background-color: orange;
`
   
function Banner(){

  const sliderData = [
    {
        id: 1,
        image:"./Slides/interactive-videos.png",
        title: "Interactive videos courses",
        text: "A new design learning with interactive videos, to immerge the student in the course",
        cta: "Discover now"
    },
    {
        id: 2,
        image: "./Slides/free-timing-learning.png",
        title: "Learn at your own schedule",
        text: "You can learn from everywhere, at your own time and rythm",
        cta: "Try today"
    },
    {
        id: 3,
        image: "./Slides/dynamicclassrooms.png",
        title: "Dynamic classrooms",
        text: "Experience dynamism in the e-learning like never before, with the new learnig format",
        cta: "You can do it now"
    },
    {
        id: 4,
        image: "./Slides/certified-courses.png",
        title: "Certified courses",
        text: "You can have a proof of your succees with certificate of completion, with our certificates",
        cta: "Engage today"
    }
] 

        return (
            <StyledCarousel autoPlay interval={4000} infiniteLoop showStatus={false}>
              {sliderData.map((slide) => (
                <SliderContainer key={slide.id}>
                  <StyledSlideImage><img src={slide.image} alt="" /></StyledSlideImage>
                  <StyledOverlay>
                    <h2 className= "overlay_title">{slide.title}</h2>
                    <p className= "overlay_text">{slide.text}</p>
                    <StyledCta>{slide.cta}</StyledCta>
                  </StyledOverlay>
                </SliderContainer>
              ))}
            </StyledCarousel>
          );
        }

        export default Banner;