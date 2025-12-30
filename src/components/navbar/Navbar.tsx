import { useState } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MoonIcon from '@mui/icons-material/DarkMode';
import SunIcon from '@mui/icons-material/LightMode';

const Wrapper = styled.div`
  background-color: midnightblue;
`;

const Nav = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: top;
  justify-content: space-between;
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

const Radio = styled.div`
  display: flex;
  background-color: #141a51;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  margin-top: 5px;
`;

const ToggleButton = styled.button`
  background-color: #141a51;
  color: white;
  width: 50px;
  height: 30px;
  border: 0;
  border-radius: 15px;
`;

const LightButton = styled(ToggleButton)`
  background-color: ${({ theme }) => (theme === 'light' ? '#1f297e' : '#141a51')};
`;

const DarkButton = styled(ToggleButton)`
  background-color: ${({ theme }) => (theme === 'dark' ? '#1f297e' : '#141a51')};
`;

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Nav>
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
        <Radio>
          <LightButton theme={darkMode ? 'dark' : 'light'} onClick={() => setDarkMode(false)}><SunIcon /></LightButton>
          <DarkButton theme={darkMode ? 'dark' : 'light'} onClick={() => setDarkMode(true)}><MoonIcon /></DarkButton>
        </Radio>
      </Nav>
    </Wrapper>
  );
};
