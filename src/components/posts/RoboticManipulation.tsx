import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, Title, Subtitle, Image, Button, Img, Iframe, Video } from "./Style";
import ur from "../../images/ur5.jpg";
import icp from "../../videos/icp.mp4";

type PropsType = {};

const Thesis = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

export const RoboticManipulation = (props: PropsType) => (
  <Wrapper>
    <Title>Solving robotic manipulation problems</Title>
    <Subtitle>My bachelor thesis under the supervising of PhD Adam Wolniakowski.</Subtitle>
    
    <Button style={{width: 200}}><Thesis to="/thesis">Thesis (in Polish)</Thesis></Button>

    <Image><Img src={ur} width="600px" alt="UR5 Robot" /></Image>
    
    <p>The purpose of this thesis was to develop a solution that allows for recognition of a
    given object and perform grasping of it by a manipulator. The further development of the
    problem known as bin picking aims at increasing a scope of industrial robots’ operation in
    a context of their work. It is quintessential in many modern robotic applications targeted
    for being more dexterous and intuitive.</p>

    <p>Speaking of the origin, this thesis has been written mostly during my stay in Denmark
      where I spent my last semester of bachelor. It's focused on robotic manipulation which is a key problem
      in modern robotics. The idea came at the beginning of my studies when I joined KNR Robotic Science Club 
      at the Mechanical Faculty of Bialystok University of Technology.
      I wanted to work with robot arms that use information from camera in order to achieve dexterous manipulation.
      Then I had a chance to meet PhD Adam Wolniakowski who was introduced to me as a person having knowledge
      about this topic and was helpful in solving robotic control issues. So, he finally became my supervisor.</p>

    <p><b>What is dexterity and why is it so important?</b></p>
    <p>Dexterity is a coordination of small muscles in movement with eyes, hands and fingers. It's also called fine motor skill.
      For example, it's a defining feature of a cat enabled by the use of its tail, claws and a lean body.
      The dexterous operations are common for many species by the use of their hands, beaks, jaws and tentacles. 
      Trying to introduce this concept into robotics many solutions implement deep learning techniques based on neural networks
      but they're ususally very robust. The goal was to find a simpler way to achieve the same.
    </p>

    <p><h5>Phases of solving the problem</h5></p>
    <ol>
      <li>Setting the most convenient orientation of the gripper to an object template manually.</li>
      <li>Finding a transformation between an object and a template.</li>
      <li>Solving an inverse kinematics task.</li>
      <li>Grasping.</li>
    </ol>

    <p><b>Iterative Closest Point</b></p>
    <p>At the start we admit we know the shape of the desired object, but don't know its position and orientation. 
    We need a transformation between the object and the template to be able to reach it and catch by robot's gripper.
    In order to find it the Iterative Closest Point algorithm has been used. It's an algorithm employed to minimize the
    difference between two clouds of points. The algorithm iteratively revises the transformation
    (combination of translation and rotation) needed to minimize an error metric, usually a distance
    from the source to the reference point cloud, such as the sum of squared differences between
    the coordinates of the matched pairs. The correct results were usually returned after eighteen iterations
    like at the following animation.</p>

    <Image>
      <Video width="400px" controls muted>
        <source src={icp} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </Image>

    <p>Because the tasks I mentioned are often performed by a particular type of robots, in
    my work I was using UR5 manipulator by Danish manufacturer Universal Robots.
    There was implemented algorithm on it that was able to define a location of seen
    objects based on the data from the computer vision sensors. In my work I was using
    code examples written in Python. Thanks to this it was possible to thoroughly verify
    in practice the working of a robot. After determining the object coordinates a manipulator drove to the desired point by
    solving inverse kinematics task and clenched the gripper fingers.</p>

    <Image>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/hV26NNi602E" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
    </Image>

    <p>All in all, the work is not self-sufficient system that would fulfill the industarial requirements in its current
    state. Speaking of the future work, the problems like segmentation, noise reduction and object recognition still remain
    unsolved. It's simply opened to develop it further.
    Anyway, the project has a potential to become a part of larger software, where it would add
    a significant value on the fields of manipulation and industry 4.0.</p>
  </Wrapper>
);
