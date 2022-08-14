import { Link } from "react-router-dom";
import styled from "styled-components";
import icp from "../../videos/icp.mp4";

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

export const RoboticManipulation = (props: PropsType) => (
  <Wrapper>
    <Title>Solving robotic manipulation problems</Title>
    <p>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</p>

    <button><Link to="/thesis">Full thesis</Link></button>

    <p>The purpose of this thesis was to develop a solution that allows for recognition of a
    given object and perform grasping of it by a manipulator. The further development of the
    problem known as bin picking aims at increasing a scope of industrial robots’ operation in
    a context of their work. It is quintessential in many modern robotic applications targeted
    for being more dexterous and intuitive.</p>

    <p><h5>Phases of solving the problem</h5></p>
    <ol>
      <li>Setting the most convenient orientation of the gripper to an object template manually.</li>
      <li>Finding a transformation between an object and a template.</li>
      <li>Solving an inverse kinematics task.</li>
      <li>Grasping.</li>
    </ol>

    <p><b>Iterative Closest Point</b></p>
    <p>In order to find a transformation between an object and a template the Iterative
    Closest Point algorithm has been used. It's an algorithm employed to minimize the
    difference between two clouds of points. The algorithm iteratively revises the transformation
    (combination of translation and rotation) needed to minimize an error metric, usually a distance
    from the source to the reference point cloud, such as the sum of squared differences between
    the coordinates of the matched pairs.</p>

    <Image>
      <video width="400px" controls muted>
        <source src={icp} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Image>

    <p>After determining the object coordinates a manipulator drives to the desired point by
    solving inverse kinematics task and clenches the gripper fingers.</p>

    <Image>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/hV26NNi602E" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </Image>

    <p>All in all, the work is not self-sufficient system that would fulfill the industarial requirements in its current
    state. Anyway, the project has a potential to become a part of larger software, where it would add
    a significant value on the fields of manipulation and industry 4.0.</p>
  </Wrapper>
);
