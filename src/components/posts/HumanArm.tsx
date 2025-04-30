import styled from "styled-components";
import { Wrapper, Title, Subtitle, Image, Img, Iframe } from "./Style";
import Arm from "../../images/arm.jpg";

const List = styled.p`
  text-align: left;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
`;

export const HumanArm = () => (
  <Wrapper>
    <Title>Lego human arm</Title>
    <Subtitle>Archival project from high school.</Subtitle>

    <Image><Img src={Arm} width="600px" alt="Taero truck" /></Image>

    <p>Model built at the beginning of 2018 in the image of a human arm.
    The robot is a combination of pneumatic and electric components. Electric parts are controlled 
    remotely while pneumatic – by the panel with a system of valves. It's quite large, even slightly
    more than an actual human arm. It features prehensile palm with tendon-like controlled fingers,
    natural range of thumb movement, fingers abduction, rotated and elevated forearm, and
    wrist axis that moves back and forth.</p>

    <p>I may sound a bit childish talking that this robot has been built entirely out of original LEGO pieces
    (including electric and pneumatic components). Only not original elements are threads used to 
    bend the fingers and a bunch of rubber bands to straighten them and clip the hoses. Obviously, except of "regular"
    and common parts we have electric circuit and quite extensive pneumatic system. These two complement 
    each other, I mean we have:</p>
    <List>
      <ul>
        <li>2 IR receivers that enable remote control</li>
        <li>6 motors of which one propels the compressor</li>
        <li>7 pneumatic cylinders</li>
        <li>4 linear actuators</li> 
        <li>6 valves that provide air to each cylinder</li>
        <li>compressor pump propelled by one of above motors</li>
        <li>pressure switch that turns off the compressor when pressure in the circuit is too high</li>
      </ul>
    </List>

    <p>Since we have tamed with a bill of material, there's time to admit what induced me to build it.
    The idea came at the end of my primary school when 
    found <Link href="https://www.youtube.com/watch?v=KR3IiXvzrds">this</Link> video. A conception
    has seemed to be interesting, even brilliant in applied solutions. After the years I had a pleasure to
    rebuild this model in almost an exact way, but its working honestly dissapointed me. Large stress and
    stiffness of some parts were causing breaks in working, sometimes even blocking a range of movements 
    (especially for palm and wrist). Keeping that in mind, I set myself a goal to build it better, stronger
    and more compact (although I haven't mentioned it, but the original model was quite large with
    disproportionately huge hand).
    </p>

    <p>The arm I designed has two electric and six pneumatic functions. Fully electric functions include 
    two possible forearm movements: bending around an elbow joint and rotation of the wrist by 90 degrees
    around longitudinal forearm axis. Both are controlled remotely via IR thanks to the receivers located
    in the shoulder. Among pneumatic functions we have typical for the fine motor skill. They are: 
    movement of a wrist and functions that allow for grasping and finger abduction. They are performed
    thanks to the pneumatic cylinders – each connected to the seperate valve. The valves are propelled by
    a single compressor trough the pressure switch.
    </p>

    {/* <p>Electric circuit includes: two battery boxes, two IR receivers, five motors with 5.5 N*cm torque and one
    more robust with 23 N*cm (including their internal reduction). Smaller motors propel purely electric
    functions: four of them coupled in pairs allow for bending the arm around an elbow and last of them, fifth 
    has been used to rotate it. The biggest sixth motor propels the compressor. Entire circuit is powered by 9V voltage.
    </p>

    <p>Pneumatic circuit includes: compressor with a single cylinder of 16 mm diameter (d) and the same stroke (s),
    pressure switch, six valves, two cylinders of d=16, s=48, four cylinders of d=16, s=18 and two smaller ones of d=8, s=16.
    "The hearth" of the system in a form of compressor is located outside of the arm and all components are connected
    with it through silicone hoses of 2 mm internal diameter. The circuit is based on one-way airflow that means
    the air is always pumped in each cylinder regardless a direction it shifts. The whole system works under relatively 
    low pressure.</p> */}

    <Image>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/OmCMfnaYNMU" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
    </Image>

  <p>To conclude I must say I'm satisfied with the model. It got into two local competitions: the podium 
  of EL-ROBO-MECH in 2018 and final of KOKOS Students' Construction Contest in the category of Smart Robots in 2021. 
  It has also been shown at some expos where aroused significant interest. Either way, the construction
  was rather flimsy. The weight, length of the pneumatic hoses and compessibility of the air made it didn't move smootly in a fact.
  However, it felt like something innovative to build and still was interesting to see it working.
  </p>
  </Wrapper>
);