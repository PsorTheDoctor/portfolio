import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AboutMe } from "./AboutMe";
import { Projects } from "./Projects";
import { Contact } from "./Contact";

export const Page = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path="/aboutme" element={<AboutMe />} />
    <Route path="/projects" element={<Projects/>} />
  
    <Route path="/contact" element={<Contact/>} />
  </Routes>
);
