import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: darkblue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  gap: 10px;
`;

const Tab = styled.a`
  padding: 10px;

`;

export const Navbar = () => (
  <Wrapper>
    <Tab><Link to="/home">Home</Link></Tab>
    <Tab><Link to="/about-me">About me</Link></Tab>
    <Tab><Link to="/projects">Projects</Link></Tab>
    <Tab><Link to="/resume">Resume</Link></Tab>
    <Tab><Link to="/contact">Contact</Link></Tab>
  </Wrapper>
);
