import styled from "styled-components";
import { Projects } from "./Projects";
import adam from "../../images/adam.jpg";

type PropsType = {};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;

const Intro = styled.div`
  background-color: blue;
  color: white;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Home = (props: PropsType) => (
  <HomeWrapper>
    <Intro>
      <div>
        <img src={adam} width="300px" alt="A photo of me" />
      </div>
      <div>
        <p>I am robotics and AI enthusiast currently doing my master degree of advanced robotics technology at University of Southern Denmark.
        I received my bachelor at Bialystok University of Technology in Poland where I was founder and leader of AI science club and scholar of Diamonds' Explorers foundation.</p>
      </div>
    </Intro>

    <Projects/>
  </HomeWrapper>
);