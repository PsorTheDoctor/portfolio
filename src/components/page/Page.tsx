import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

import { HumanArm } from "../posts/HumanArm";
import { AutonomousVehicle } from "../posts/AutonomousVehicle";
import { VisuomotorRobotPolicies } from "../posts/VisuomotorRobotPolicies";

export const Page = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/about-me" element={<AboutMe />} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/human-arm" element={<HumanArm />} />
    <Route path="/autonomous-vehicle" element={<AutonomousVehicle />} />
    <Route path="/visuomotor-robot-policies" element={<VisuomotorRobotPolicies />} />
  </Routes>
);
