import styled from "styled-components";
import { Projects } from "./Projects";
import Adam from "../../images/greenscreen.jpg";

import RobotIcon from "@mui/icons-material/PrecisionManufacturing";
import ComputerIcon from '@mui/icons-material/Computer';
import TerminalIcon from '@mui/icons-material/Terminal';
import PsychologyIcon from '@mui/icons-material/Psychology';

import DiamondExplorers from "../../images/odkrywcy_diamentow.png";
import PB from "../../images/pb.png";
import Suempol from "../../images/suempol.png";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Intro = styled.div`
  background-color: #ffe76d;
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

const About = styled.div`
  padding-left: 30px;
  padding-top: 90px;
`;

const Serif = styled.div`
  font-family: Cambria;
  font-size: 24px;
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
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
`;

const Hobby = styled.div`
  float: left;
  text-align: center;
  width: 250px;
`;

const Sponsors = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
`;

const Sponsor = styled.div`
  float: left;
  text-align: center;
`;

export const Home = (props: PropsType) => (
  <Wrapper>
    <Intro>
      <About>
        <p><Serif><b>Adam Wolkowycki</b></Serif>
        <h5>Robotics Engineer, Programmer</h5></p>
        <Serif>
          <p>I am robotics and AI enthusiast currently doing my master degree of Robot Systems: Advanced Robotics Technology at University of Southern Denmark.</p>
          <p>I received my bachelor degree at Bialystok University of Technology in Poland where I was founder and leader of AI science club and scholar of Diamonds' Explorers foundation.</p>
        </Serif>
      </About>
      <img src={Adam} width="400px" alt="A photo of me" />
    </Intro>

    <Header><p>Fields of interest</p></Header>
    <Hobbies>
      <Hobby>
        <RobotIcon className="icon" />
        <p><h5>Robotics</h5></p>
        <p>Manipulators, autonomous <br/>mobile robots, controllers</p>
      </Hobby>
      <Hobby>
        <TerminalIcon className="icon" />
        <p><h5>Artificial Intelligence</h5></p>
        <p>Neural networks, unsupervised <br/>and reinforcement learning</p>
      </Hobby>
      <Hobby>
        <ComputerIcon className="icon" />
        <p><h5>Computer Vision</h5></p>
        <p>Image processing, <br/>object recognition</p>
      </Hobby>
      <Hobby>
        <PsychologyIcon className="icon" />
        <p><h5>Psychology</h5></p>
        <p>Cognitive science, neurobiology, theory of mind</p>
      </Hobby>
    </Hobbies>

    <Projects/>

    <Header><p>Former sponsors</p></Header>
    <Sponsors>
      <Sponsor><img src={DiamondExplorers} width="250px" alt="Odkrywcy Diamentów" /></Sponsor>
      <Sponsor><img src={PB} width="200px" alt="Bialystok University of Technology" /></Sponsor>
      <Sponsor><img src={Suempol} width="250px" alt="Suempol" /></Sponsor>
    </Sponsors>
  </Wrapper>
);
