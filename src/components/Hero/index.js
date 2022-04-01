import React from "react";
import video from "../../video/video.mp4";
import styled from "styled-components";

function Hero() {
  return (
    <>
      <HeroContainer>
        <HeroVideo autoPlay muted loop src={video} type="video/mp4"></HeroVideo>
        <HeroContent>
          <HeroHeader>The Social Media</HeroHeader>
          <HeroP>The Era of technology</HeroP>
          <HeroBtn>Sign In</HeroBtn>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 92vh;
  position: relative;
`;

const HeroVideo = styled.video`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeroHeader = styled.h1`
  font-size: 4rem;
  margin: 0;
`;
const HeroP = styled.p`
  font-size: 1.1rem;
`;
const HeroBtn = styled.div`
  border-radius: 50px;
  color: white;
  background-color: blue;
  text-decoration: none;
  padding: 10px 40px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightblue;
    color: black;
  }
`;
