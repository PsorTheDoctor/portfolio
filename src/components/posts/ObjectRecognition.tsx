import styled from "styled-components"

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`

export const ObjectRecognition = (props: PropsType) => (
  <Wrapper>
    <Title>Object recognition for the autonomous vehicle</Title>
  </Wrapper>
);
