import styled from "styled-components";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  gap: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  float: left;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const Projects = (props: PropsType) => (
  <div>
    <Header>
      <p>Projects</p>
    </Header>

    <Wrapper>
      <Column>
        <Title>Object recognition for the autonomous vehicle</Title>
        <p>A project with Polish company STEKOP.</p>
      </Column>

      <Column>
        <Title>Solving robotic manipulation problems</Title>
        <p>My bachelor thesis.</p>
      </Column>
    </Wrapper>
  </div>
);
