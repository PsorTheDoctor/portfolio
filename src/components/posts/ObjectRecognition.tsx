import styled from "styled-components"
import Rover from "../../images/rover.jpg";
import Truck from "../../images/truck.jpg";

type PropsType = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
  margin-top: 10px;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: left;
`

const Image = styled.div`
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Img = styled.img`
  max-width: 100%;
`;

const Iframe = styled.iframe`
  max-width: 100%;
`;

const Button = styled.button`
  background-color: blue;
  height: 30px;
  width: 200px;
  border: 0;
  border-radius: 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  margin-bottom: 10px;
  &:hover {
    background-color: lightgreen;
    transition: 0.3s;
  }
`

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  };
`

export const ObjectRecognition = (props: PropsType) => (
  <Wrapper>
    <Title>Object recognition for the autonomous vehicle</Title>
    <p>A project with Polish company STEKOP.</p>

    <Button><Link href="https://stekopsa.pl/ncbr/">Project Site (in Polish)</Link></Button>

    <p>The task was to create a real-time GPU-accelerated environment recognition system including object detection
    and distance estimation methods. The final solution will be implemented to an autonomous military vehicle.</p>

    <p>The story of my part of this project began shortly after my return to Poland from exchange studies and passing 
    bachelor exam. One of my collegues from the rover section of KNR Robotics Science Club introduced me to
    the company called STEKOP. They specialize in security systems and were looking for a computer vision developer.
    Honestly, it wasn't first time I heard about this project - I've read somewhat before that made me curious
    about it. So, it's not needed to say I accepted the offer and sent them a resume with not much wondering.</p>

    <Image>
      <Img src={Rover} height="600px" alt="Test vehicle" />
      <p>The trolley-sized vehicle for testing the software.</p>
    </Image>

    <p>Object recognition itself is perhaps the most popular and widely described problem in a field 
    of computer vision. Basically, it consists of object detection and localisation including information
    about its size and occurance probability. State-of-the-art solutions use convolutional or transformer 
    neural network architectures. I've used a first type in this project that allows to recognize objects 
    belonging to eighty classes, such as: person, car, truck, bike, stop sign etc.</p>

    <Image>
      <Iframe width="560" height="315" src="https://www.youtube.com/embed/DgbUik2994E" title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
    </Image>

    <p>It was really satisfying to see how accurate some predictions were. 
      and less satisfying - to notice 
    the program run with the speed of two frames per second on my laptop's CPU. After adding GPU acceleration
    the results were impressive achieving 64 FPS for the lighter neural net model and 16 FPS for more robust ones 
    (I don't know why it fixates on powers of two, but for unknown reason it does). The main disadvantage was rapid
    dissapearing the prediction bounding boxes that, at least in the theory, could be solved by using simple 
    Kalman filter.</p>

    <Image>
      <Img src={Truck} width="600px" alt="Military truck" />
      <p>The military truck on which final solution will be implemented.</p>
    </Image>    
  </Wrapper>
);
