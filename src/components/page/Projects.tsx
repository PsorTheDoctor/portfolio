import { Link } from "react-router-dom";
import styled from "styled-components";

import Rbos from '../../images/rbos.jpg';
import Taero from '../../images/taero2.jpg';
import Arm from '../../images/arm.jpg';
// import Ur5 from "../../images/ur5_thumb.jpg";

const Wrapper = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0 10px 0;
`;
 
// const Row = styled.div`
//   @media (max-width: 1000px) {
//     display: block;
//   }
//   @media (min-width: 1000px) {
//     display: flex;
//   } 
//   flex-direction: row;
//   max-width: 1000px;
//   margin-left: auto;
//   margin-right: auto;
//   justify-content: space-between;
//   padding-left: 10px;
//   padding-right: 10px;
// `;

const Header = styled.p`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  
`;

const Post = styled.div`
  float: left;
  width: 480px;
  // max-height: 450px;
  /* margin-left: auto;
  margin-right: auto; */
  padding: 10px 10px 30px 10px;
`;

const Link2 = styled(Link)`
  display: flex;
  justify-content: center;
`;

const Anchor = styled.a`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  text-align: center;
  max-width: 100%;
  max-height: 270px;
  height: auto;
  &:hover {
    opacity: 0.9;
    transition: 0.3s;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const Button = styled.button`
  background-color: #0041c2;
  height: 30px;
  width: 130px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  box-shadow: 5px 5px 5px lightgray;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`;

const StyledAnchor = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const ProjectsContent = () => (
  <Posts>
      <Post>
        <Anchor href="https://r-bos.com/" target="_blank">
          <Img src={Rbos} alt="RBOS" />
        </Anchor>
        <Title>Mobile strawberry-picking platform</Title>
        <p>A simulation of the mobile strawberry-picking platform for the Polish start-up R-BOS as a part of the Hub of Talents 3 incubation program.</p>
        <Button><StyledAnchor href="https://r-bos.com/" target="_blank">Project site</StyledAnchor></Button>
      </Post>
      <Post>
        <Link2 to="/visuomotor-robot-policies">
          <Img src="https://github.com/PsorTheDoctor/visuomotor-robot-policies-v2/raw/main/static/robomimic_trimmed.gif" alt="robomimic simulation" />
        </Link2>
        <Title>Learning Visuomotor Robot Policies</Title>
        <p>My master's thesis focused on teaching robots based on a raw visual input. 
          Project supervised by Iñigo Iturrate and Ralph Brorsen and carried out in collaboration with the Danish company Universal Robots.</p>
        <Button><StyledLink to="/visuomotor-robot-policies">Read more</StyledLink></Button>
      </Post>
      <Post>
        <Link2 to="/autonomous-vehicle">
          <Img src={Taero} alt="TAERO autonomous vehicle" />
        </Link2>
        <Title>Perception for the autonomous vehicle</Title>
        <p>Computer vision system for the autonomous military truck. Project implemented with the Polish company STEKOP.</p>
        <Button><StyledLink to="/autonomous-vehicle">Read more</StyledLink></Button>
      </Post>
      <Post>
        <Link to="/human-arm">
          <Img src={Arm} width={480} alt="Lego human arm" />
        </Link>
        <Title>Lego human arm</Title>
        <p>Archival project from high school.</p>
        <Button><StyledLink to="/human-arm">Read more</StyledLink></Button>
      </Post>
      <Post>
        {/* <Link2 to="/robotic-manipulation">
          <Img src={Ur5} alt="UR5 robot arm" />
        </Link2> */}
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor's thesis about pose estimation under the supervision of Adam Wolniakowski.</p>
        <Button><StyledLink to="/robotic-manipulation">Read more</StyledLink></Button>
      </Post>
  </Posts>
);

export const Projects = () => (
  <Wrapper>
    <Header>Projects</Header>
    <ProjectsContent/>
  </Wrapper>
);
