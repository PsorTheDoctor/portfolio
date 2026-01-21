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
  justify-content: space-around;
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
  width: 80px;
  height: 30px;
  border-radius: 15px;
  margin: 5px 10px;
`;

const ToggleButton = styled.button`
  background-color: #141a51;
  color: white;
  width: 40px;
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

const Icon = styled.div`
  transform: scale(0.75);
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

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Nav>
        <Menu onClick={ toggleMenu }>
          { isOpen ? <CloseIcon  /> : <MenuIcon /> }
        </Menu>
        <Tabs isOpen={ isOpen }>
          <Tab to="/home"><span onClick={closeMenu}>Home</span></Tab>
          <Tab to="/about-me"><span onClick={closeMenu}>About me</span></Tab>
          <Tab to="/projects"><span onClick={closeMenu}>Projects</span></Tab>
          <TabA href="https://drive.google.com/file/d/1b5efsuAeRqWlLU8EjOXKO6h1cwTl9YlX/view?usp=sharing" target="blank">
            <span onClick={closeMenu}>Resume</span>
          </TabA>
          <Tab to="/contact"><span onClick={closeMenu}>Contact</span></Tab>
          <Radio>
            <LightButton theme={darkMode ? 'dark' : 'light'} onClick={() => setDarkMode(false)}>
              <Icon><SunIcon /></Icon>
            </LightButton>
            <DarkButton theme={darkMode ? 'dark' : 'light'} onClick={() => setDarkMode(true)}>
              <Icon><MoonIcon /></Icon>
            </DarkButton>
          </Radio>
        </Tabs>
      </Nav>
    </Wrapper>
  );
};
