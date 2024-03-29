import styled from "styled-components";
import { Projects } from "./Projects";
import Adam from "../../images/adam_thumb.png";

import RobotIcon from "@mui/icons-material/PrecisionManufacturing";
import ComputerIcon from '@mui/icons-material/Computer';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';

import DiamondExplorers from "../../images/odkrywcy_diamentow.png";
import PB from "../../images/pb.png";
import Suempol from "../../images/suempol.png";

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
`;

const Serif = styled.div`
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
  @media (max-width: 1000px) {
    display: block;
  }
  @media (min-width: 1000px) {
    display: flex;
  } 
  align-items: center;
  justify-content: space-around;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 25px;
`;

const HobbyRow = styled.div`
  @media (max-width: 500px) {
    display: block;
  }
  @media (min-width: 500px) {
    display: flex;
  } 
  max-width: 500px;
`;

const Hobby = styled.div`
  text-align: center;
  width: 250px;
`;

const Sponsors = styled.div`
  @media (max-width: 680px) {
    display: block;
  }
  @media (min-width: 680px) {
    display: flex;
  } 
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
`;

const Sponsor = styled.div`
  text-align: center;
`;

const Robot = styled(RobotIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const Terminal = styled(TerminalIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const Computer = styled(ComputerIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

const Psychology = styled(PsychologyIcon)`
  transform: scale(1.5);
  margin: 15px;
`;

export const Home = () => (
  <Wrapper>
    <IntroWrapper>
      <Intro>
        <About>
          <p><Serif><b>Adam Wolkowycki</b></Serif>
          <h5>Robotics & AI Engineer</h5></p>
          <Serif>
            <p>I am robotics and AI engineer currently doing my master's degree of Robot Systems: Advanced Robotics Technology at University of Southern Denmark.</p>
            <p>I received my bachelor of engineering at Bialystok University of Technology in Poland where I was founder and leader of AI science club and scholar of Diamonds' Explorers foundation.</p>
          </Serif>
        </About>
      </Intro>
    </IntroWrapper>

    <Header><p>Fields of interest</p></Header>
    <Hobbies>
      <HobbyRow>
        <Hobby>
          <Robot />
          <p><h5>Robotics</h5></p>
          <p>Manipulators, autonomous <br/>mobile robots, controllers</p>
        </Hobby>
        <Hobby>
          <Terminal />
          <p><h5>Artificial Intelligence</h5></p>
          <p>Neural networks, unsupervised <br/>and reinforcement learning</p>
        </Hobby>
      </HobbyRow>
      <HobbyRow>
        <Hobby>
          <Computer />
          <p><h5>Computer Vision</h5></p>
          <p>Image and video processing, <br/>object recognition</p>
        </Hobby>
        <Hobby>
          <Psychology />
          <p><h5>Psychology</h5></p>
          <p>Cognitive science, neurobiology, theory of mind</p>
        </Hobby>
      </HobbyRow>
    </Hobbies>

    <Projects/>

    {/* <Header><p>Former sponsors</p></Header>
    <Sponsors>
      <Sponsor><img src={DiamondExplorers} width="250px" alt="Odkrywcy Diamentów" /></Sponsor>
      <Sponsor><img src={PB} width="200px" alt="Bialystok University of Technology" /></Sponsor>
      <Sponsor><img src={Suempol} width="230px" alt="Suempol" /></Sponsor>
    </Sponsors> */}
  </Wrapper>
);
