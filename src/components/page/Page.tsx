import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import { RoboticManipulation } from "../posts/RoboticManipulation";
import { ObjectRecognition } from "../posts/ObjectRecognition";
import { ImageGeneration } from "../posts/ImageGeneration";

export const Page = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/robotic-manipulation" element={<RoboticManipulation />} />
    <Route path="/object-recognition" element={<ObjectRecognition />} />
    <Route path="/image-generation" element={<ImageGeneration />} />
  </Routes>
);
