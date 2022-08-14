import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Resume } from "./Resume";

import { RoboticManipulation } from "../posts/RoboticManipulation";
import { Thesis } from "../posts/Thesis";
import { ObjectRecognition } from "../posts/ObjectRecognition";

export const Page = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/resume" element={<Resume />} />
    <Route path="/contact" element={<Contact/>} />

    <Route path="/robotic-manipulation" element={<RoboticManipulation />} />
    <Route path="/thesis" element={<Thesis />} />
    <Route path="/object-recognition" element={<ObjectRecognition />} />
  </Routes>
);
