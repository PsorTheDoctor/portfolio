import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Navbar = () => (
  <NavbarWrapper>
    <Link to="/home">Home</Link>
    <Link to="/about-me">About me</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </NavbarWrapper>
);