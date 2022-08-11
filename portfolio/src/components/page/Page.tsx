import { Route, Routes } from "react-router-dom";
import { AboutMe } from "../aboutme/AboutMe";
import { Home } from "../home/Home";

export const Page = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/aboutme" element={<AboutMe />} />
  </Routes>
);
