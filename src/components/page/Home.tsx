import styled from "styled-components";
import { Projects } from "./Projects";
import Background from "../../images/background.jpg";
import Adam from "../../images/adam.jpg";
import DiamondExplorers from "../../images/odkrywcy_diamentow.png";
import PB from "../../images/pb.png";
import Suempol from "../../images/suempol.png";

type PropsType = {};

const Teaser = styled.div`
  width: 100%;
  height: 100px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;

const Intro = styled.div`
  color: white;
  font-family: Cambria;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  gap: 10px;
`;

const Sponsors = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Tile = styled.div`
  float: left;
`

export const Home = (props: PropsType) => (
  <div>
  <Teaser>
    <img src={Background} width="100%" height="500px" alt="" />
  </Teaser>

  <Wrapper>
      <Intro>
        <div>
          <img src={Adam} width="300px" alt="A photo of me" />
        </div>
        <div>
          <p><b>Adam Wolkowycki</b></p>
          <p>I am robotics and AI enthusiast currently doing my master degree of Robot Systems: Advanced Robotics Technology at University of Southern Denmark.</p>
          <p>I received my bachelor degree at Bialystok University of Technology in Poland where I was founder and leader of AI science club and scholar of Diamonds' Explorers foundation.</p>
        </div>
      </Intro>

      <Projects/>

      <Header><p>Former sponsors</p></Header>
      <Sponsors>
        <Tile><img src={DiamondExplorers} width="250px" alt="Odkrywcy Diamentów" /></Tile>
        <Tile><img src={PB} width="200px" alt="Bialystok University of Technology" /></Tile>
        <Tile><img src={Suempol} width="250px" alt="Suempol" /></Tile>
      </Sponsors>
  </Wrapper>
  </div>
);
