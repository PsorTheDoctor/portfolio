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

const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const RoboticManipulation = (props: PropsType) => (
  <Wrapper>
    <Title>Solving robotic manipulation problems</Title>
    <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>

    <p>The purpose of this thesis was to develop a solution that allows for recognition of a
    given object and perform grasping of it by a manipulator. The further development of the
    problem known as bin picking aims at increasing a scope of industrial robots’ operation in
    a context of their work. It is quintessential in many modern robotic applications targeted
    for being more dexterous and intuitive.</p>

    <Image>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hV26NNi602E" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Image>

    <p>All in all, the work is not self-sufficient system that would fulfill the industarial requirements in its current
    state. Anyway, the project has a potential to become a part of larger software, where it would add
    a significant value on the fields of manipulation and industry 4.0.</p>
  </Wrapper>
);
