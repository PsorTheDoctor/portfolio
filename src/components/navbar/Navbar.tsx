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
  overflow: auto;
  white-space: nowrap;
`;

const Tab = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 10px;

  &:hover, &:focus, &:active {
    color: lightgreen;
  };
`;

export const Navbar = () => (
  <Wrapper>
    <Tab to="/home">Home</Tab>
    <Tab to="/about-me">About me</Tab>
    <Tab to="/projects">Projects</Tab>
    <Tab to="/resume">Resume</Tab>
    <Tab to="/contact">Contact</Tab>
  </Wrapper>
);
