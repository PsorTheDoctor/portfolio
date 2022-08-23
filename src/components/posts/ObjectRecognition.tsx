import styled from "styled-components";
import { useState } from 'react';
import { Wrapper, Title, Subtitle, Image, Button, Iframe } from "./Style";

import Rover from "../../images/rover.jpg";
import Turtle from "../../images/turtle.jpg";
import Turtle2 from "../../images/turtle2.jpg";
import Quad from "../../images/quad.jpg";
import Quad2 from "../../images/quad2.jpg";
import Truck from "../../images/truck.jpg";
import Truck2 from "../../images/truck2.jpg";
import Halftrack from "../../images/halftrack.jpg";
import Halftrack2 from "../../images/halftrack2.jpg";

type PropsType = {};

const Link = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

const Radio = styled.div`
  background-color: lightgray;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
`

const LeftButton = styled.button`
  background-color: lightgray;
  color: black;
  height: 30px;
  float: left;
  border: 0;
  border-radius: 15px 0 0 15px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    background-color: blue;
    color: white;
    border-radius: 15px;
  }
`;

const MiddleButton = styled.button`
  background-color: lightgray;
  color: black;
  height: 30px;
  float: left;
  border: 0;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    background-color: blue;
    color: white;
    border-radius: 15px;
  }
`;

const RightButton = styled.button`
  background-color: lightgray;
  color: black;
  height: 30px;
  float: left;
  border: 0;
  border-radius: 0 15px 15px 0;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  &:focus {
    background-color: blue;
    color: white;
    border-radius: 15px;
  }
`;

const Photos = styled.div`
  display: flex;
  overflow: auto;
`;

const Img = styled.img`
  height: 200px;
  margin-right: 10px;
`;

export const ObjectRecognition = () => {
  const models = [
    "https://www.youtube.com/embed/Y7qCvF73RXs", // v2
    "https://www.youtube.com/embed/DgbUik2994E", // v3
    "https://www.youtube.com/embed/LMtrFGAEDgg"  // v4
  ];
  const [model, setModel] = useState(models[0]);

  return (
  <Wrapper>
    <Title>Object recognition for the autonomous vehicle</Title>
    <Subtitle>A project with Polish company STEKOP.</Subtitle>

    <Link href="https://stekopsa.pl/ncbr/" target="blank">
      <Button>Project Site (in Polish)</Button>
    </Link>

    <p>The task was to create a real-time GPU-accelerated environment recognition system including object detection
    and distance estimation methods. The final solution will be implemented to an autonomous military vehicle.</p>

    <p>The story of my part of this project began shortly after my return to Poland from exchange studies and passing 
    bachelor exam. One of my collegues from the rover section of KNR Robotics Science Club introduced me to
    the company called STEKOP. They specialize in security systems and were looking for a computer vision developer.
    Honestly, it wasn't first time I heard about this project - I've read somewhat before that made me curious
    about it. So, it's not needed to say I accepted the offer and sent them a resume with not much wondering.</p>

    <p>Object recognition itself is perhaps the most popular and widely described problem in a field 
    of computer vision. Basically, it consists of object detection and localisation including information
    about its size and occurance probability. State-of-the-art solutions use convolutional or transformer 
    neural network architectures. I've used a first type in this project that allows to recognize objects 
    belonging to eighty classes, such as: person, car, truck, bike, stop sign etc.</p>

    <Radio>
      <LeftButton onClick={() => setModel(models[0])}>Model 1</LeftButton>
      <MiddleButton onClick={() => setModel(models[1])}>Model 2</MiddleButton>
      <RightButton onClick={() => setModel(models[2])}>Model 3</RightButton>
    </Radio>
    <Image>
      <Iframe width="560" height="315" src={model} title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
    </Image>

    <p>It was really satisfying to see how accurate some predictions were. 
      and less satisfying - to notice 
    the program run with the speed of two frames per second on my laptop's CPU. After adding GPU acceleration
    the results were impressive achieving 64 FPS for the lighter neural net model and 16 FPS for more robust ones 
    (I don't know why it fixates on powers of two, but for unknown reason it does). The main disadvantage was rapid
    dissapearing the prediction bounding boxes that, at least in the theory, could be simply solved by using
    Kalman filter.</p>

    <Photos>
      <Img src={Rover} alt="Test vehicle" />
      <Img src={Turtle} alt="Rover" />
      <Img src={Turtle2} alt="Rover" />
      <Img src={Quad} alt="Quad-based vehicle" />
      <Img src={Quad2} alt="Quad-based vehicle" />
      <Img src={Halftrack} alt="Half-tracked vehicle" /> 
      <Img src={Halftrack2} alt="Half-tracked vehicle" /> 
      <Img src={Truck} alt="Military truck" />
      <Img src={Truck2} alt="Military truck" />  
    </Photos>    
  </Wrapper>
  );
};
