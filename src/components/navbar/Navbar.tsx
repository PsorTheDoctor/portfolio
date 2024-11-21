import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled.div`
  background-color: midnightblue;
  display: flex;
  align-items: top;
  justify-content: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: bold;
  overflow: auto;
  white-space: nowrap;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Tabs = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
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

const TabA = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;
  padding: 10px;

  &:hover, &:focus, &:active {
    color: lightgreen;
  };
`;

const Menu = styled.div`
  transform: scale(1.25);
  margin: 15px;
  color: white;
  @media (min-width: 600px) {
    display: none !important;
  }
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Menu onClick={ toggleMenu }>
      { isOpen ? <CloseIcon  /> : <MenuIcon /> }
      </Menu>
      <Tabs isOpen={ isOpen }>
        <Tab to="/home">Home</Tab>
        <Tab to="/about-me">About me</Tab>
        <Tab to="/projects">Projects</Tab>
        <TabA href="https://drive.google.com/file/d/15A7EvEOvrP3Y_BU_cUhrhxdYVeoHKG-W/view?usp=drive_link" target="blank">
          Resume
        </TabA>
        <Tab to="/contact">Contact</Tab>
      </Tabs>
    </Wrapper>
  );
};
