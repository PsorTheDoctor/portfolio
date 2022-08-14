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
  font-size: 32px;
  font-weight: bold;
`

const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const ObjectRecognition = (props: PropsType) => (
  <Wrapper>
    <Title>Object recognition for the autonomous vehicle</Title>

    <Image>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DgbUik2994E" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Image>
  </Wrapper>
);
