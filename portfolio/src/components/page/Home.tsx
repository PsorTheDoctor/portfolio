import styled from "styled-components";

type PropsType = {};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HomeRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ProjectsHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const ProjectsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Home = (props: PropsType) => (
  <HomeWrapper>
    <HomeRow>
      <div>
        <p>image</p>
      </div>
      <div>
        <p>text</p>
      </div>
    </HomeRow>
    <ProjectsHeader>
      <h3>PROJECTS</h3>
    </ProjectsHeader>
    <HomeRow>
      <ProjectsColumn>
        <p>img1</p>
        <p>text1</p>
      </ProjectsColumn>
      <ProjectsColumn>
        <p>img2</p>
        <p>text2</p>
      </ProjectsColumn>
    </HomeRow>
  </HomeWrapper>
);