import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import bgVideo from "../assets/videos/bgVideo2.mp4"
import { Fade } from "react-awesome-reveal"

const Hero = () => {
  return (
    <MainContainer>
      <MainBg>
        <VideoBg
          src={bgVideo}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </MainBg>
      <HeroContent>
        <HeroItems>
          <Fade direction="up" duration={2000}>
            <MainH1>Unreal Destinations</MainH1>
            <MainP>Out of this world</MainP>
          </Fade>
          <Button primary="true" big="true" round="true" to="#trips">
            Travel Now
          </Button>
        </HeroItems>
      </HeroContent>
    </MainContainer>
  )
}

export default Hero

const MainContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;
    color: #fff;
    
    :before {
      content: "",
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 2;
      background: linear-gradient(
        180deg, 
        rgba(0, 0, 0, 0.2) 0%, 
        rgba(0, 0, 0, 0.7) 100%,
        ), 
        linear-gradient(
          180deg, 
          rgba(0, 0, 0, 0.2) 0%, 
          transparent 100%
        );
  }
`

const MainBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  line-height: 1.5;
  font-weight: bold;
  color: #fff;
`

const MainH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-botton: 2.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const MainP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-botton: 3.5rem;
  font-weight: 400;
`
