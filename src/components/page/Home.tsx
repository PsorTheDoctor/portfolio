import React, { useState, useEffect, ReactNode } from 'react';
import styled from "styled-components";
import { ProjectsContent } from "./Projects";
import Adam from "../../images/adam_thumb.png";

import BracketsIcon from '@mui/icons-material/DataObject';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import TerminalIcon from '@mui/icons-material/Terminal';
import DesignIcon from '@mui/icons-material/DesignServices';
import RobotIcon from "@mui/icons-material/PrecisionManufacturing";
import PsychologyIcon from '@mui/icons-material/Psychology';

// import DiamondExplorers from "../../images/odkrywcy_diamentow.png";
// import PB from "../../images/pb.png";
// import Suempol from "../../images/suempol.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const IntroWrapper = styled.div`
  background-image: linear-gradient(to top right, #0000a0, #1569c7);
  @media (min-width: 1000px) {
    margin-top: 25px;
    border-radius: 25px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  }
  min-height: 530px;
  margin-bottom: 50px;
`;

const Intro = styled.div`
  background-image: url(${Adam});
  background-repeat: no-repeat;
  background-size: 400px;
  background-position: right bottom;
  @media (max-width: 900px) {
    background-color: #0041c2;
    background-blend-mode: soft-light;
  }
  @media (min-width: 900px) {
    filter: saturate(50%);
  }
  @media (min-width: 1000px) {
    border-radius: 25px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.15);
  }
  min-height: inherit;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const About = styled.div`
  width: 650px;
  padding: 30px;
  text-shadow: 1px 1px 1px darkblue;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in;
`;

const Serif = styled.span`
  font-family: 'Noto Serif', serif;
  font-size: 23px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
`;

const Hobbies = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto 25px auto;
  transform: translateY(30px);
`;

const Hobby = styled.div`
  text-align: center;
  width: 303px;
  padding: 5px 5px 15px 5px;
`;

// const Sponsors = styled.div`
//   @media (max-width: 680px) {
//     display: block;
//   }
//   @media (min-width: 680px) {
//     display: flex;
//   } 
//   align-items: center;
//   justify-content: space-around;
//   margin-bottom: 25px;
// `;

// const Sponsor = styled.div`
//   text-align: center;
// `;

const Icon = styled.div`
  transform: scale(1.5);
  margin: 15px;
`;

const Projects = styled.div`
  transform: translateY(30px);
`;

interface FadeProps {
  children: ReactNode;
  fadeStart: number;
  fadeEnd: number;
}

const Fade: React.FC<FadeProps> = ({ children, fadeStart, fadeEnd }) => {
  const y = 30;
  const [opacity, setOpacity] = useState(0); 
  const [shift, setShift] = useState(y);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      let newOpacity = 0;
      let newShift = y;

      if (scrollPos > fadeStart) {
        newOpacity = (scrollPos - fadeStart) / (fadeEnd - fadeStart);
        newOpacity = Math.min(newOpacity, 1); 

        newShift = Math.min(y, (scrollPos - fadeStart) / (fadeEnd - fadeStart) * y);
      }
      setOpacity(newOpacity);
      setShift(newShift);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fadeStart, fadeEnd]);

  return (
    <div className="fade" style={{ opacity, transform: `translateY(-${shift}px)` }}>
      { children }
    </div>
  );
};

export const Home = () => (
  <Wrapper>
    <IntroWrapper>
      <Intro>
        <About>
          <p><Serif><b>Adam Wolkowycki</b></Serif>
          <h5>Robotics & AI Engineer</h5></p>
          <Serif>
            <p>I am robotics and AI engineer who graduated from University of Southern Denmark with master's degree of Robot Systems: Advanced Robotics Technology.
            In addition to it, I hold a bachelor's from Bialystok University of Technology in Poland where I was founder and leader of AI science club and scholar of Diamonds' Explorers foundation.</p>
          </Serif>
        </About>
      </Intro>
    </IntroWrapper>

    <Header><p>Fields of work</p></Header>
    
    <Fade fadeStart={ 100 } fadeEnd={ 400 }>
    <Hobbies>
      <Hobby>
        <Icon><BracketsIcon /></Icon>
        <h5>Software Development</h5>
        Object-Oriented Programming <br/>
        (Python, C++, Java)
      </Hobby>
      <Hobby>
        <Icon><TerminalIcon /></Icon>
        <h5>Machine Learning</h5>
        Clustering, dimensionality reduction, anomaly detection, model evaluation
      </Hobby>
      <Hobby>
        <Icon><CameraIcon /></Icon>
        <h5>Computer Vision</h5>
        Object detection, point cloud processing, pose estimation, visual odometry
      </Hobby>
      <Hobby>
        <Icon><PsychologyIcon /></Icon>
        <h5>Artificial Intelligence</h5>
        Deep neural networks, reinforcement learning, generative AI
      </Hobby>
      <Hobby>
        <Icon><DesignIcon /></Icon>
        <h5>Mechanical Design</h5>
        Autodesk Inventor and SolidWorks <br/>CAD software
      </Hobby>
      <Hobby>
        <Icon><RobotIcon /></Icon>
        <h5>Robotics</h5>
        Control theory, simulation engines <br/>(ROS, pybullet, MuJoCo)
      </Hobby>
    </Hobbies>
    </Fade>

    <Header><p>Projects</p></Header>
    <Fade fadeStart={ 500 } fadeEnd={ 800 }>
      <Projects>
        <ProjectsContent/>
      </Projects>
    </Fade>

    {/* <Header><p>Former sponsors</p></Header>
    <Sponsors>
      <Sponsor><img src={DiamondExplorers} width="250px" alt="Odkrywcy Diamentów" /></Sponsor>
      <Sponsor><img src={PB} width="200px" alt="Bialystok University of Technology" /></Sponsor>
      <Sponsor><img src={Suempol} width="230px" alt="Suempol" /></Sponsor>
    </Sponsors> */}
  </Wrapper>
);
