import React from 'react'
import { AboutContainer, HeaderContainer, InfoContainer, StyledImage } from './AboutStyle'
import codingSvg from '../../assets/coding.svg'

const About = () => {
    return (
        <AboutContainer>
           <StyledImage src={codingSvg}/> 
           <HeaderContainer>
               <h1>About Software Developer <span>Recep</span></h1>
           </HeaderContainer>
           <InfoContainer>
               <h2>Hi, I'm Recep</h2>
                <h4>I'm currently learning Front-End Development Languages.</h4>
                <h6>I've already known HTML CSS JS React</h6>
                <h4>Send email:---@---</h4> 
           </InfoContainer>
        </AboutContainer>
    )
}

export default About
