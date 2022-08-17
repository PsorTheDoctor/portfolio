import styled from "styled-components"
import Truck from "../../images/truck.jpg";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 50px;
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
    <p>A project with Polish company STEKOP.</p>

    <p>The task was to create a real-time environment recognition system including object recognition
    and distance estimation methods. Solved by using convolutional neural networks.
    </p>
    <Image>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/DgbUik2994E" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Image>

    <Image><img src={Truck} width="600px" alt="Military truck" /></Image>    
  </Wrapper>
);
