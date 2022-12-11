import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';



const COLORS = {
  primaryDark: "#115b4c",
  primaryLight: "#B6EDC8",
};

const MenuLabel = styled.label`
  position: absolute;
  top: 0rem;
  right: 0rem;
  border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 1000;
  text-align: center;
`;


const NavBackground = styled.div`
  position: absolute;
  top: 0rem;
  right: 0rem;
  background-color: #4532CC;
  );
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "#4532CC")};
  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 3rem;
    height: 2px;
    display: inline-block;
    position: absolute;
    left: 0;
    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: absolute;
  top: 0;
  right: 19rem;
  z-index: 600;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;
  background-color: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;
  &:hover,
  &:active {
    background-position: 100%;
    color: #D4F290;
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="hamburger">
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li >
            <ItemLink onClick={handleClick} to="/">
              <HashLink smooth to="/#Home">
                Home
              </HashLink>
            </ItemLink>
          </li>
          <li >
            <ItemLink onClick={handleClick} to="">
              <HashLink smooth to="/#Projects">
                Projects
              </HashLink>

            </ItemLink>
          </li>
          <li >
            <ItemLink onClick={handleClick} to="">
              <HashLink smooth to="/#skills">
                Skills
              </HashLink>

            </ItemLink>
          </li>
          <li >
            <ItemLink onClick={handleClick} to="">
              <HashLink smooth to="/#about">
                About
              </HashLink>


            </ItemLink>
          </li>

        </List>
      </Navigation>
    </div>
  );
}


export default HamburgerMenu;