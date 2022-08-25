import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import { HumanArm } from "../posts/HumanArm";
import { RoboticManipulation } from "../posts/RoboticManipulation";
import { ObjectRecognition } from "../posts/ObjectRecognition";
import { ImageGeneration } from "../posts/ImageGeneration";

const Wrapper = styled.div`
  background-color: whitesmoke;
`;

export const Page = () => (
  <Wrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/human-arm" element={<HumanArm />} />
      <Route path="/robotic-manipulation" element={<RoboticManipulation />} />
      <Route path="/object-recognition" element={<ObjectRecognition />} />
      <Route path="/image-generation" element={<ImageGeneration />} />
    </Routes>
  </Wrapper>
);
