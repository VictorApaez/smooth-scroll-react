import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  height: 80px;
  justify-content: center;
  /* align-items: center; */
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const NavContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  height: 80px;
  margin: 0px 20px;
`;
export const NavLogo = styled(LinkRouter)`
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 70%);
    font-size: 1.8rem;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;
export const NavLink = styled(LinkScroll)`
  &:active {
    border-bottom: 3px solid blue;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  color: white;
  background-color: blue;
  text-decoration: none;
  padding: 10px 22px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: lightblue;
  }
`;
